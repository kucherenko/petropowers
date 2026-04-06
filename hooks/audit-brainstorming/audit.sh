#!/usr/bin/env bash
# PostResponse hook for brainstorming compliance audit
# Checks if agent should have invoked brainstorming but didn't

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PLUGIN_ROOT="$(cd "${SCRIPT_DIR}/../.." && pwd)"
LOG_FILE="${PLUGIN_ROOT}/logs/brainstorming-audit.log"

# Ensure logs directory exists
mkdir -p "${PLUGIN_ROOT}/logs"

# Read input from environment (set by hook runner)
USER_MESSAGE="${CLAUDE_USER_MESSAGE:-}"
ASSISTANT_MESSAGE="${CLAUDE_ASSISTANT_MESSAGE:-}"
TOOL_CALLS="${CLAUDE_TOOL_CALLS:-[]}"

# If no user message, nothing to audit
if [ -z "$USER_MESSAGE" ]; then
    echo '{"status": "skipped", "reason": "no user message"}'
    exit 0
fi

# Trigger patterns (lowercase for matching)
CREATIVE_KEYWORDS="generate|create|build|implement|add|develop|make|set up|write|design"
DOMAIN_KEYWORDS="reservoir|well|seismic|production|drilling|las|seg-y|segy|witsml|prodml|pipeline|formation|porosity|permeability"
IMPLEMENTATION_TOOLS="Write|Bash"

# Convert to lowercase for matching
user_lower=$(echo "$USER_MESSAGE" | tr '[:upper:]' '[:lower:]')
assistant_lower=$(echo "$ASSISTANT_MESSAGE" | tr '[:upper:]' '[:lower:]')

# Check for triggers in user message
has_creative=false
has_domain=false

if echo "$user_lower" | grep -qE "$CREATIVE_KEYWORDS"; then
    has_creative=true
fi

if echo "$user_lower" | grep -qE "$DOMAIN_KEYWORDS"; then
    has_domain=true
fi

# Check if brainstorming was invoked
brainstorming_invoked=false
if echo "$assistant_lower" | grep -qE "brainstorming(-gatekeeper)?.*skill|using.*brainstorming"; then
    brainstorming_invoked=true
fi

# Check if implementation tools were used
implementation_used=false
if echo "$TOOL_CALLS" | grep -qE "$IMPLEMENTATION_TOOLS"; then
    implementation_used=true
fi

# Determine if this is a violation
violation=false
violation_reason=""

if [ "$has_creative" = true ] && [ "$has_domain" = true ]; then
    if [ "$brainstorming_invoked" = false ] && [ "$implementation_used" = true ]; then
        violation=true
        violation_reason="Creative+domain request with implementation but no brainstorming"
    fi
fi

# Log and output
timestamp=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

if [ "$violation" = true ]; then
    # Log the violation
    echo "[$timestamp] VIOLATION: $violation_reason" >> "$LOG_FILE"
    echo "  Request: ${USER_MESSAGE:0:200}..." >> "$LOG_FILE"
    echo "  Triggers: creative=$has_creative, domain=$has_domain" >> "$LOG_FILE"
    echo "" >> "$LOG_FILE"
    
    # Output for hook system
    cat <<EOF
{
  "status": "violation",
  "violations": [
    {
      "type": "skipped_brainstorming",
      "evidence": "$violation_reason",
      "triggers": {
        "creative": $has_creative,
        "domain": $has_domain
      }
    }
  ],
  "additionalContext": "<system-warning>Previous response violated brainstorming requirement. Request contained creative+domain triggers but agent skipped brainstorming and proceeded to implementation. Please invoke brainstorming skill for creative/generative tasks.</system-warning>"
}
EOF
else
    # Log compliance (optional, can be removed for less noise)
    if [ "$has_creative" = true ] || [ "$has_domain" = true ]; then
        echo "[$timestamp] COMPLIANT: Triggers present, brainstorming_invoked=$brainstorming_invoked, implementation_used=$implementation_used" >> "$LOG_FILE"
    fi
    
    echo '{"status": "compliant"}'
fi

exit 0
