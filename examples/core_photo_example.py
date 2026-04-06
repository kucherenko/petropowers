#!/usr/bin/env python3
"""Example script demonstrating core photo generation.

This script shows how to use the CorePhotoGenerator to create
synthetic core sample images with metadata.

Usage:
    # Set your Google AI API key
    export GOOGLE_AI_API_KEY="your-api-key-here"
    
    # Run the example
    python examples/core_photo_example.py
"""

import os
import sys

# Add parent directory to path to import synthetic_data
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from synthetic_data.core_photos import CorePhotoGenerator


def main():
    """Generate example core photos."""
    
    # Check for API key
    api_key = os.environ.get("GOOGLE_AI_API_KEY")
    if not api_key:
        print("Error: GOOGLE_AI_API_KEY environment variable not set")
        print("Please set it with: export GOOGLE_AI_API_KEY='your-api-key-here'")
        return
    
    print("Initializing Core Photo Generator...")
    generator = CorePhotoGenerator(api_key=api_key, seed=42)
    
    # Example 1: Generate a single sandstone core photo
    print("\n" + "="*60)
    print("Example 1: Single Sandstone Core Sample")
    print("="*60)
    
    result = generator.create_record(
        well_name="Example-Well-001",
        depth_range=(2000.0, 3000.0),
        core_length=1.0,
        lithology="sandstone",
        field_name="West Texas Field",
        formation="Permian Basin",
        output_dir="./output/core_photos"
    )
    
    print(f"\nGenerated core photo:")
    print(f"  Image: {result['image_path']}")
    print(f"  Metadata: {result['metadata_path']}")
    print(f"\nMetadata summary:")
    print(result['metadata'].get_tooltip_text())
    
    # Example 2: Generate multiple core photos with different lithologies
    print("\n" + "="*60)
    print("Example 2: Multiple Core Samples (Different Lithologies)")
    print("="*60)
    
    lithologies = ["sandstone", "shale", "carbonate", "limestone", "dolomite"]
    well_names = [f"Well-{litho.capitalize()}-001" for litho in lithologies]
    
    print(f"\nGenerating {len(lithologies)} core photos...")
    results = generator.create_dataset(
        n_records=len(lithologies),
        well_names=well_names,
        depth_range=(1500.0, 2500.0),
        core_length=0.5,
        lithology="sandstone",  # Note: This would need to be enhanced to support different lithologies per sample
        field_name="Synthetic Basin",
        formation="Test Formation",
        output_dir="./output/core_photos"
    )
    
    print(f"\nGenerated {len(results)} core photos:")
    for i, result in enumerate(results):
        print(f"\n{i+1}. {result['metadata'].well_name}")
        print(f"   Depth: {result['metadata'].depth_start:.1f} - {result['metadata'].depth_end:.1f} m")
        print(f"   Lithology: {result['metadata'].lithology}")
        print(f"   Image: {result['image_path']}")
    
    # Example 3: Generate core photos for a specific location
    print("\n" + "="*60)
    print("Example 3: Core Samples from Specific Location")
    print("="*60)
    
    result = generator.create_record(
        well_name="Permian-Basin-042",
        depth_range=(2500.0, 3500.0),
        core_length=1.5,
        lithology="carbonate",
        field_name="Delaware Basin",
        formation="Wolfcamp Formation",
        latitude=31.8457,  # West Texas
        longitude=-103.2933,
        output_dir="./output/core_photos"
    )
    
    print(f"\nGenerated core photo for Permian Basin:")
    print(f"  Well: {result['metadata'].well_name}")
    print(f"  Location: {result['metadata'].latitude:.4f}, {result['metadata'].longitude:.4f}")
    print(f"  Formation: {result['metadata'].formation}")
    print(f"  Image: {result['image_path']}")
    
    print("\n" + "="*60)
    print("Examples complete!")
    print("="*60)
    print(f"\nAll generated files are in: ./output/core_photos")
    print("\nEach core photo includes:")
    print("  - PNG image file")
    print("  - JSON metadata file")
    print("\nMetadata includes:")
    print("  - Depth range and coordinates")
    print("  - Lithology and formation")
    print("  - Physical properties (porosity, permeability)")
    print("  - Visual characteristics (color, texture, fractures)")
    print("  - Tooltip text for visualization")


if __name__ == "__main__":
    main()
