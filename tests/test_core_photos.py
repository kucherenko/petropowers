"""Tests for core photo generator."""
import os
import json
import tempfile
import pytest
from unittest.mock import Mock, patch

from synthetic_data.core_photos import CorePhotoGenerator
from synthetic_data.core_photos.photo_generator import CorePhotoMetadata


class TestCorePhotoMetadata:
    """Tests for CorePhotoMetadata class."""
    
    def test_metadata_creation(self):
        """Test creating metadata object."""
        metadata = CorePhotoMetadata(
            depth_start=2000.0,
            depth_end=2001.0,
            latitude=31.8457,
            longitude=-103.2933,
            well_name="Test-Well",
            lithology="sandstone",
            porosity=0.25,
            permeability=150.0,
            grain_size="medium",
            texture="well-sorted",
            color="tan",
            fractures=2,
            bedding_angle=15.5,
            oil_staining=True,
            sample_date="2024-01-01",
            field_name="Test Field",
            formation="Test Formation",
            image_path="/path/to/image.png"
        )
        
        assert metadata.well_name == "Test-Well"
        assert metadata.depth_start == 2000.0
        assert metadata.depth_end == 2001.0
        assert metadata.lithology == "sandstone"
        assert metadata.porosity == 0.25
    
    def test_metadata_to_dict(self):
        """Test converting metadata to dictionary."""
        metadata = CorePhotoMetadata(
            depth_start=2000.0,
            depth_end=2001.0,
            latitude=31.8457,
            longitude=-103.2933,
            well_name="Test-Well",
            lithology="sandstone",
            porosity=0.25,
            permeability=150.0,
            grain_size="medium",
            texture="well-sorted",
            color="tan",
            fractures=2,
            bedding_angle=15.5,
            oil_staining=True,
            sample_date="2024-01-01",
            field_name="Test Field",
            formation="Test Formation",
            image_path="/path/to/image.png"
        )
        
        data = metadata.to_dict()
        assert isinstance(data, dict)
        assert data["well_name"] == "Test-Well"
        assert data["porosity"] == 0.25
    
    def test_metadata_to_json(self):
        """Test converting metadata to JSON."""
        metadata = CorePhotoMetadata(
            depth_start=2000.0,
            depth_end=2001.0,
            latitude=31.8457,
            longitude=-103.2933,
            well_name="Test-Well",
            lithology="sandstone",
            porosity=0.25,
            permeability=150.0,
            grain_size="medium",
            texture="well-sorted",
            color="tan",
            fractures=2,
            bedding_angle=15.5,
            oil_staining=True,
            sample_date="2024-01-01",
            field_name="Test Field",
            formation="Test Formation",
            image_path="/path/to/image.png"
        )
        
        json_str = metadata.to_json()
        assert isinstance(json_str, str)
        
        # Parse and verify
        data = json.loads(json_str)
        assert data["well_name"] == "Test-Well"
    
    def test_tooltip_text(self):
        """Test generating tooltip text."""
        metadata = CorePhotoMetadata(
            depth_start=2000.0,
            depth_end=2001.0,
            latitude=31.8457,
            longitude=-103.2933,
            well_name="Test-Well",
            lithology="sandstone",
            porosity=0.25,
            permeability=150.0,
            grain_size="medium",
            texture="well-sorted",
            color="tan",
            fractures=2,
            bedding_angle=15.5,
            oil_staining=True,
            sample_date="2024-01-01",
            field_name="Test Field",
            formation="Test Formation",
            image_path="/path/to/image.png"
        )
        
        tooltip = metadata.get_tooltip_text()
        assert "Test-Well" in tooltip
        assert "2000.0 - 2001.0 m" in tooltip
        assert "sandstone" in tooltip
        assert "25%" in tooltip  # Porosity formatted as percentage


class TestCorePhotoGenerator:
    """Tests for CorePhotoGenerator class."""
    
    def test_generator_initialization_with_key(self):
        """Test initializing generator with API key."""
        with patch('google.generativeai.configure'):
            generator = CorePhotoGenerator(api_key="test-key", seed=42)
            assert generator.api_key == "test-key"
            assert generator.seed == 42
    
    def test_generator_initialization_without_key(self):
        """Test initialization fails without API key."""
        # Clear environment variable
        old_key = os.environ.get("GOOGLE_AI_API_KEY")
        if old_key:
            del os.environ["GOOGLE_AI_API_KEY"]
        
        with pytest.raises(ValueError, match="Google AI API key"):
            CorePhotoGenerator()
        
        # Restore
        if old_key:
            os.environ["GOOGLE_AI_API_KEY"] = old_key
    
    def test_generator_initialization_from_env(self):
        """Test initializing generator from environment variable."""
        os.environ["GOOGLE_AI_API_KEY"] = "test-env-key"
        
        with patch('google.generativeai.configure'):
            generator = CorePhotoGenerator(seed=42)
            assert generator.api_key == "test-env-key"
        
        # Cleanup
        del os.environ["GOOGLE_AI_API_KEY"]
    
    def test_get_lithology_properties(self):
        """Test getting lithology properties."""
        with patch('google.generativeai.configure'):
            generator = CorePhotoGenerator(api_key="test-key")
            
            # Test sandstone
            props = generator._get_lithology_properties("sandstone")
            assert "porosity_range" in props
            assert "permeability_range" in props
            assert "grain_sizes" in props
            
            # Test shale
            props = generator._get_lithology_properties("shale")
            assert props["porosity_range"][0] < props["porosity_range"][1]
            
            # Test unknown lithology (defaults to sandstone)
            props = generator._get_lithology_properties("unknown")
            assert "porosity_range" in props
    
    def test_generate_metadata(self):
        """Test generating metadata."""
        with patch('google.generativeai.configure'):
            generator = CorePhotoGenerator(api_key="test-key", seed=42)
            
            metadata = generator._generate_metadata(
                well_name="Test-Well",
                depth_range=(2000.0, 3000.0),
                core_length=1.0,
                lithology="sandstone",
                field_name="Test Field",
                formation="Test Formation"
            )
            
            assert metadata["well_name"] == "Test-Well"
            assert 2000.0 <= metadata["depth_start"] <= 2999.0
            assert metadata["depth_end"] == metadata["depth_start"] + 1.0
            assert metadata["lithology"] == "sandstone"
            assert 0.0 <= metadata["porosity"] <= 1.0
            assert metadata["permeability"] > 0
    
    def test_generate_metadata_with_coordinates(self):
        """Test generating metadata with specified coordinates."""
        with patch('google.generativeai.configure'):
            generator = CorePhotoGenerator(api_key="test-key", seed=42)
            
            metadata = generator._generate_metadata(
                well_name="Test-Well",
                depth_range=(2000.0, 3000.0),
                core_length=1.0,
                lithology="sandstone",
                field_name="Test Field",
                formation="Test Formation",
                latitude=31.8457,
                longitude=-103.2933
            )
            
            assert metadata["latitude"] == 31.8457
            assert metadata["longitude"] == -103.2933
    
    def test_create_image_prompt(self):
        """Test creating image generation prompt."""
        with patch('google.generativeai.configure'):
            generator = CorePhotoGenerator(api_key="test-key")
            
            metadata = {
                "lithology": "sandstone",
                "color": "tan",
                "grain_size": "medium",
                "texture": "well-sorted",
                "oil_staining": True,
                "fractures": 2,
                "bedding_angle": 15.0
            }
            
            prompt = generator._create_image_prompt(metadata)
            
            assert "sandstone" in prompt
            assert "tan" in prompt
            assert "medium" in prompt
            assert "well-sorted" in prompt
            assert "oil staining" in prompt
            assert "2 visible fractures" in prompt
            assert "15" in prompt
    
    @patch('google.generativeai.configure')
    @patch('google.generativeai.GenerativeModel')
    def test_create_record_with_mock(self, mock_model_class, mock_configure):
        """Test creating a single record with mocked API."""
        # Mock the model response
        mock_model = Mock()
        mock_response = Mock()
        mock_part = Mock()
        mock_part.inline_data.data = b'fake_image_data'
        mock_response.parts = [mock_part]
        mock_model.generate_content.return_value = mock_response
        mock_model_class.return_value = mock_model
        
        generator = CorePhotoGenerator(api_key="test-key", seed=42)
        
        with tempfile.TemporaryDirectory() as tmpdir:
            result = generator.create_record(
                well_name="Test-Well",
                depth_range=(2000.0, 3000.0),
                core_length=1.0,
                lithology="sandstone",
                field_name="Test Field",
                formation="Test Formation",
                output_dir=tmpdir
            )
            
            assert "metadata" in result
            assert "image_path" in result
            assert "metadata_path" in result
            assert os.path.exists(result["image_path"])
            assert os.path.exists(result["metadata_path"])
            
            # Verify metadata
            metadata = result["metadata"]
            assert metadata.well_name == "Test-Well"
            assert metadata.lithology == "sandstone"
    
    @patch('google.generativeai.configure')
    @patch('google.generativeai.GenerativeModel')
    def test_create_dataset_with_mock(self, mock_model_class, mock_configure):
        """Test creating dataset with mocked API."""
        # Mock the model response
        mock_model = Mock()
        mock_response = Mock()
        mock_part = Mock()
        mock_part.inline_data.data = b'fake_image_data'
        mock_response.parts = [mock_part]
        mock_model.generate_content.return_value = mock_response
        mock_model_class.return_value = mock_model
        
        generator = CorePhotoGenerator(api_key="test-key", seed=42)
        
        with tempfile.TemporaryDirectory() as tmpdir:
            results = generator.create_dataset(
                n_records=3,
                well_names=["Well-001", "Well-002", "Well-003"],
                depth_range=(2000.0, 3000.0),
                lithology="sandstone",
                output_dir=tmpdir
            )
            
            assert len(results) == 3
            
            for result in results:
                assert "metadata" in result
                assert os.path.exists(result["image_path"])
                assert os.path.exists(result["metadata_path"])


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
