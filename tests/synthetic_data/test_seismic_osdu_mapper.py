"""Tests for SEGYMapper OSDU manifest generator."""
import pytest
import tempfile
import os
import segyio
import numpy as np
from synthetic_data.osdu import SEGYMapper


def _make_segy(tmpdir: str, survey_name: str = "test-survey") -> str:
    """Write a minimal valid SEG-Y file and return its path."""
    path = os.path.join(tmpdir, f"{survey_name}.sgy")
    spec = segyio.spec()
    spec.format = 1
    spec.sorting = 2
    spec.iline = 5
    spec.xline = 21
    spec.samples = np.arange(10) * 0.004
    spec.ilines = np.array([1, 2])
    spec.xlines = np.array([1, 2])
    with segyio.create(path, spec) as f:
        f.trace = np.zeros((4, 10), dtype=np.float32)
        f.bin.update({
            segyio.BinField.Traces: 4,
            segyio.BinField.Samples: 10,
            segyio.BinField.Interval: 4000,
        })
        for i in range(4):
            f.header[i].update({
                segyio.TraceField.INLINE_3D: spec.ilines[i // 2],
                segyio.TraceField.CROSSLINE_3D: spec.xlines[i % 2],
            })
    return path


def test_segy_mapper_returns_manifest():
    """to_manifest should return a dict with OSDU structure."""
    mapper = SEGYMapper()
    with tempfile.TemporaryDirectory() as tmpdir:
        segy_path = _make_segy(tmpdir)
        manifest = mapper.to_manifest(
            segy_path,
            legal_tags={"legaltags": ["test-tag"]},
        )
        assert isinstance(manifest, dict)
        assert "data" in manifest
        assert "WorkProduct" in manifest["data"]


def test_segy_mapper_kind():
    """Manifest WorkProduct kind should be SeismicTraceData."""
    mapper = SEGYMapper()
    with tempfile.TemporaryDirectory() as tmpdir:
        segy_path = _make_segy(tmpdir)
        manifest = mapper.to_manifest(
            segy_path,
            legal_tags={"legaltags": ["test-tag"]},
        )
        kind = manifest["data"]["WorkProduct"]["kind"]
        assert "SeismicTraceData" in kind


def test_segy_mapper_legal_tags():
    """Manifest should include provided legal tags."""
    mapper = SEGYMapper()
    with tempfile.TemporaryDirectory() as tmpdir:
        segy_path = _make_segy(tmpdir)
        manifest = mapper.to_manifest(
            segy_path,
            legal_tags={"legaltags": ["my-legal-tag"]},
        )
        legal = manifest["data"]["WorkProduct"]["legal"]
        assert "my-legal-tag" in legal["legaltags"]


def test_segy_mapper_survey_name_in_id():
    """Manifest ID should contain the survey name derived from filename."""
    mapper = SEGYMapper()
    with tempfile.TemporaryDirectory() as tmpdir:
        segy_path = _make_segy(tmpdir, survey_name="ppr-1_3d_survey")
        manifest = mapper.to_manifest(
            segy_path,
            legal_tags={"legaltags": ["tag"]},
        )
        entity_id = manifest["data"]["WorkProduct"]["id"]
        assert "ppr-1" in entity_id or "ppr" in entity_id
