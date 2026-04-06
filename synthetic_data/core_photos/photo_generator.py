"""Core photo generator using Google Gemini API for image generation."""
import os
import json
import tempfile
from typing import Dict, List, Optional, Tuple, Any
from dataclasses import dataclass, asdict
import numpy as np

from synthetic_data.base import Generator


@dataclass
class CorePhotoMetadata:
    """Metadata for a generated core photo.
    
    Attributes:
        depth_start: Starting depth of core sample (meters)
        depth_end: Ending depth of core sample (meters)
        latitude: Latitude coordinate
        longitude: Longitude coordinate
        well_name: Name of the well
        lithology: Rock type (sandstone, shale, carbonate, etc.)
        porosity: Estimated porosity (0-1)
        permeability: Estimated permeability (mD)
        grain_size: Grain size description
        texture: Texture description
        color: Dominant color description
        fractures: Number of visible fractures
        bedding_angle: Bedding plane angle (degrees)
        oil_staining: Whether oil staining is visible
        sample_date: Date of sampling
        field_name: Field name
        formation: Formation name
        image_path: Path to generated image
    """
    depth_start: float
    depth_end: float
    latitude: float
    longitude: float
    well_name: str
    lithology: str
    porosity: float
    permeability: float
    grain_size: str
    texture: str
    color: str
    fractures: int
    bedding_angle: float
    oil_staining: bool
    sample_date: str
    field_name: str
    formation: str
    image_path: str
    
    def to_dict(self) -> Dict[str, Any]:
        """Convert metadata to dictionary."""
        return asdict(self)
    
    def to_json(self) -> str:
        """Convert metadata to JSON string."""
        return json.dumps(self.to_dict(), indent=2)
    
    def get_tooltip_text(self) -> str:
        """Generate tooltip text for visualization."""
        return (
            f"Well: {self.well_name}\n"
            f"Depth: {self.depth_start:.1f} - {self.depth_end:.1f} m\n"
            f"Location: {self.latitude:.4f}, {self.longitude:.4f}\n"
            f"Lithology: {self.lithology}\n"
            f"Porosity: {self.porosity:.2%}\n"
            f"Permeability: {self.permeability:.1f} mD\n"
            f"Grain Size: {self.grain_size}\n"
            f"Texture: {self.texture}\n"
            f"Color: {self.color}\n"
            f"Fractures: {self.fractures}\n"
            f"Bedding Angle: {self.bedding_angle:.1f}°\n"
            f"Oil Staining: {'Yes' if self.oil_staining else 'No'}\n"
            f"Formation: {self.formation}\n"
            f"Field: {self.field_name}"
        )


class CorePhotoGenerator(Generator):
    """Generate synthetic core photos using Google Gemini API.
    
    Creates realistic vertical core sample images with:
    - Proper geological features
    - Metadata including depth, coordinates, lithology
    - Physical properties (porosity, permeability)
    - Visual characteristics (texture, color, fractures)
    """
    
    def __init__(self, api_key: Optional[str] = None, seed: int = None):
        """Initialize generator.
        
        Args:
            api_key: Google AI API key (if not provided, reads from GOOGLE_AI_API_KEY env var)
            seed: Random seed for reproducibility
        """
        self.api_key = api_key or os.environ.get("GOOGLE_AI_API_KEY")
        if not self.api_key:
            raise ValueError(
                "Google AI API key must be provided either as api_key parameter "
                "or GOOGLE_AI_API_KEY environment variable"
            )
        
        self.seed = seed
        self.rng = np.random.default_rng(seed)
        
        # Lazy import to avoid requiring google-generativeai if not using this module
        try:
            import google.generativeai as genai
            self.genai = genai
            self.genai.configure(api_key=self.api_key)
        except ImportError:
            raise ImportError(
                "google-generativeai package is required for core photo generation. "
                "Install it with: pip install google-generativeai"
            )
    
    def _generate_metadata(
        self,
        well_name: str,
        depth_range: Tuple[float, float],
        core_length: float,
        lithology: str,
        field_name: str,
        formation: str,
        latitude: Optional[float] = None,
        longitude: Optional[float] = None,
    ) -> Dict[str, Any]:
        """Generate realistic metadata for a core sample.
        
        Args:
            well_name: Name of the well
            depth_range: (min_depth, max_depth) for the well
            core_length: Length of core sample in meters
            lithology: Rock type
            field_name: Field name
            formation: Formation name
            latitude: Optional latitude (generated if not provided)
            longitude: Optional longitude (generated if not provided)
            
        Returns:
            Dictionary of metadata parameters
        """
        # Generate random depth within range
        depth_start = self.rng.uniform(depth_range[0], depth_range[1] - core_length)
        depth_end = depth_start + core_length
        
        # Generate coordinates if not provided (typical oil field ranges)
        if latitude is None:
            latitude = self.rng.uniform(25.0, 50.0)  # Typical US oil field latitudes
        if longitude is None:
            longitude = self.rng.uniform(-110.0, -80.0)  # Typical US oil field longitudes
        
        # Lithology-specific properties
        lithology_props = self._get_lithology_properties(lithology)
        
        # Generate properties with realistic ranges
        porosity = self.rng.uniform(*lithology_props["porosity_range"])
        permeability = self.rng.uniform(*lithology_props["permeability_range"])
        grain_size = self.rng.choice(lithology_props["grain_sizes"])
        texture = self.rng.choice(lithology_props["textures"])
        color = self.rng.choice(lithology_props["colors"])
        fractures = self.rng.integers(0, lithology_props["max_fractures"])
        bedding_angle = self.rng.uniform(0, 90)
        oil_staining = self.rng.random() < lithology_props["oil_staining_prob"]
        
        return {
            "depth_start": depth_start,
            "depth_end": depth_end,
            "latitude": latitude,
            "longitude": longitude,
            "well_name": well_name,
            "lithology": lithology,
            "porosity": porosity,
            "permeability": permeability,
            "grain_size": grain_size,
            "texture": texture,
            "color": color,
            "fractures": fractures,
            "bedding_angle": bedding_angle,
            "oil_staining": oil_staining,
            "sample_date": "2024-01-01",
            "field_name": field_name,
            "formation": formation,
        }
    
    def _get_lithology_properties(self, lithology: str) -> Dict[str, Any]:
        """Get realistic property ranges for a lithology type.
        
        Args:
            lithology: Rock type
            
        Returns:
            Dictionary of property ranges and options
        """
        properties = {
            "sandstone": {
                "porosity_range": (0.15, 0.35),
                "permeability_range": (10, 1000),
                "grain_sizes": ["very fine", "fine", "medium", "coarse"],
                "textures": ["well-sorted", "moderately sorted", "poorly sorted"],
                "colors": ["tan", "light brown", "gray", "white", "yellow-brown"],
                "max_fractures": 3,
                "oil_staining_prob": 0.4,
            },
            "shale": {
                "porosity_range": (0.05, 0.15),
                "permeability_range": (0.001, 0.1),
                "grain_sizes": ["clay", "silt"],
                "textures": ["laminated", "fissile", "massive"],
                "colors": ["dark gray", "black", "brown", "green-gray"],
                "max_fractures": 5,
                "oil_staining_prob": 0.2,
            },
            "carbonate": {
                "porosity_range": (0.05, 0.30),
                "permeability_range": (0.1, 500),
                "grain_sizes": ["micrite", "sparite", "fossiliferous"],
                "textures": ["crystalline", "vuggy", "oolitic", "fossiliferous"],
                "colors": ["light gray", "cream", "tan", "white"],
                "max_fractures": 4,
                "oil_staining_prob": 0.3,
            },
            "limestone": {
                "porosity_range": (0.08, 0.25),
                "permeability_range": (1, 300),
                "grain_sizes": ["fine", "medium", "coarse"],
                "textures": ["crystalline", "oolitic", "bioclastic"],
                "colors": ["light gray", "cream", "tan"],
                "max_fractures": 3,
                "oil_staining_prob": 0.3,
            },
            "dolomite": {
                "porosity_range": (0.10, 0.28),
                "permeability_range": (5, 400),
                "grain_sizes": ["fine", "medium", "coarse"],
                "textures": ["crystalline", "sucrosic", "vuggy"],
                "colors": ["tan", "brown", "gray"],
                "max_fractures": 3,
                "oil_staining_prob": 0.35,
            },
        }
        
        return properties.get(lithology.lower(), properties["sandstone"])
    
    def _create_image_prompt(self, metadata: Dict[str, Any]) -> str:
        """Create a detailed prompt for Gemini image generation.
        
        Args:
            metadata: Core sample metadata
            
        Returns:
            Prompt string for image generation
        """
        oil_stain_text = "with visible oil staining" if metadata["oil_staining"] else ""
        fracture_text = f"with {metadata['fractures']} visible fractures" if metadata["fractures"] > 0 else ""
        
        prompt = (
            f"Create a photorealistic vertical core sample photograph of {metadata['lithology']} rock. "
            f"The core should be cylindrical, photographed from the side showing a vertical cross-section. "
            f"The rock should have a {metadata['color']} color with {metadata['grain_size']} grain size. "
            f"The texture should be {metadata['texture']}. "
            f"{oil_stain_text} {fracture_text}. "
            f"The bedding planes should be at approximately {metadata['bedding_angle']:.0f} degrees. "
            f"The image should look like a professional geological core photography, "
            f"with good lighting and clear details of the rock texture and structure. "
            f"The background should be neutral. The core sample should be the main focus. "
            f"Style: scientific documentation photograph, high detail, natural lighting."
        )
        
        return prompt
    
    def create_record(
        self,
        well_name: str,
        depth_range: Tuple[float, float] = (1000.0, 3000.0),
        core_length: float = 1.0,
        lithology: str = "sandstone",
        field_name: str = "Synthetic Field",
        formation: str = "Synthetic Formation",
        latitude: Optional[float] = None,
        longitude: Optional[float] = None,
        output_dir: Optional[str] = None,
        **kwargs
    ) -> Dict[str, Any]:
        """Generate a single core photo with metadata.
        
        Args:
            well_name: Name of the well
            depth_range: (min_depth, max_depth) for the well in meters
            core_length: Length of core sample in meters
            lithology: Rock type (sandstone, shale, carbonate, limestone, dolomite)
            field_name: Field name
            formation: Formation name
            latitude: Latitude coordinate (generated if not provided)
            longitude: Longitude coordinate (generated if not provided)
            output_dir: Directory to save image and metadata (default: temp dir)
            
        Returns:
            Dictionary containing CorePhotoMetadata and image path
        """
        # Generate metadata
        metadata_dict = self._generate_metadata(
            well_name=well_name,
            depth_range=depth_range,
            core_length=core_length,
            lithology=lithology,
            field_name=field_name,
            formation=formation,
            latitude=latitude,
            longitude=longitude,
        )
        
        # Create output directory
        if output_dir is None:
            output_dir = tempfile.mkdtemp()
        os.makedirs(output_dir, exist_ok=True)
        
        # Generate image using Gemini
        prompt = self._create_image_prompt(metadata_dict)
        
        try:
            # Use Gemini 2.0 Flash for image generation
            model = self.genai.GenerativeModel("gemini-2.0-flash-exp")
            
            # Generate image
            response = model.generate_content(
                [prompt],
                generation_config=self.genai.GenerationConfig(
                    response_mime_type="image/png"
                )
            )
            
            # Save image
            image_filename = f"{well_name}_depth_{metadata_dict['depth_start']:.1f}m.png"
            image_path = os.path.join(output_dir, image_filename)
            
            # Get the image data from response
            if hasattr(response, 'parts') and len(response.parts) > 0:
                image_data = response.parts[0].inline_data.data
                with open(image_path, 'wb') as f:
                    f.write(image_data)
            else:
                # Fallback: create a placeholder if generation fails
                print(f"Warning: Image generation failed for {well_name}. Creating placeholder.")
                self._create_placeholder_image(image_path)
                
        except Exception as e:
            print(f"Error generating image with Gemini: {e}")
            print("Creating placeholder image instead.")
            image_filename = f"{well_name}_depth_{metadata_dict['depth_start']:.1f}m.png"
            image_path = os.path.join(output_dir, image_filename)
            self._create_placeholder_image(image_path)
        
        # Add image path to metadata
        metadata_dict["image_path"] = image_path
        
        # Create metadata object
        metadata = CorePhotoMetadata(**metadata_dict)
        
        # Save metadata as JSON
        metadata_path = image_path.replace(".png", "_metadata.json")
        with open(metadata_path, 'w') as f:
            f.write(metadata.to_json())
        
        return {
            "metadata": metadata,
            "image_path": image_path,
            "metadata_path": metadata_path,
        }
    
    def _create_placeholder_image(self, image_path: str):
        """Create a placeholder image when Gemini API fails.
        
        Args:
            image_path: Path to save the placeholder image
        """
        try:
            from PIL import Image, ImageDraw, ImageFont
            
            # Create a simple placeholder
            img = Image.new('RGB', (400, 800), color=(200, 200, 200))
            draw = ImageDraw.Draw(img)
            
            # Add text
            text = "Core Sample\nPlaceholder"
            draw.text((150, 350), text, fill=(100, 100, 100))
            
            img.save(image_path)
        except ImportError:
            # If PIL is not available, create a minimal PNG
            # This is a minimal valid PNG file (1x1 gray pixel)
            minimal_png = (
                b'\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x00\x01'
                b'\x00\x00\x00\x01\x08\x02\x00\x00\x00\x90wS\xde\x00\x00'
                b'\x00\x0cIDATx\x9cc\xc0\xc0\xc0\x00\x00\x00\x04\x00\x01'
                b'\x27\r\xf4\x07\x00\x00\x00\x00IEND\xaeB`\x82'
            )
            with open(image_path, 'wb') as f:
                f.write(minimal_png)
    
    def create_dataset(
        self,
        n_records: int,
        well_names: Optional[List[str]] = None,
        depth_range: Tuple[float, float] = (1000.0, 3000.0),
        core_length: float = 1.0,
        lithology: str = "sandstone",
        field_name: str = "Synthetic Field",
        formation: str = "Synthetic Formation",
        output_dir: Optional[str] = None,
        **kwargs
    ) -> List[Dict[str, Any]]:
        """Generate multiple core photos with metadata.
        
        Args:
            n_records: Number of core photos to generate
            well_names: List of well names (auto-generated if not provided)
            depth_range: (min_depth, max_depth) for wells in meters
            core_length: Length of core samples in meters
            lithology: Rock type
            field_name: Field name
            formation: Formation name
            output_dir: Directory to save images and metadata
            
        Returns:
            List of dictionaries containing metadata and paths
        """
        # Generate well names if not provided
        if well_names is None:
            well_names = [f"Well-{i:03d}" for i in range(n_records)]
        
        # Ensure we have enough names
        if len(well_names) < n_records:
            well_names.extend([f"Well-{i:03d}" for i in range(len(well_names), n_records)])
        
        # Create output directory
        if output_dir is None:
            output_dir = tempfile.mkdtemp()
        os.makedirs(output_dir, exist_ok=True)
        
        # Generate each record
        results = []
        for i in range(n_records):
            result = self.create_record(
                well_name=well_names[i],
                depth_range=depth_range,
                core_length=core_length,
                lithology=lithology,
                field_name=field_name,
                formation=formation,
                output_dir=output_dir,
            )
            results.append(result)
        
        return results
