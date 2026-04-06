"""Setup for synthetic_data package."""
from setuptools import setup, find_packages

setup(
    name="synthetic_data",
    version="0.1.0",
    description="Synthetic data generation for oil & gas domain",
    author="Superpowers",
    packages=find_packages(),
    install_requires=[
        "lasio>=0.31",
        "welly>=0.5.0",
        "dlisio>=0.3.0",
        "segyio>=1.9.0",
        "numpy>=1.21.0",
        "pandas>=1.3.0",
        "scipy>=1.7.0",
    ],
    python_requires=">=3.8",
)