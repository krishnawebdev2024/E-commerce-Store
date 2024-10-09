import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-[calc(100vh-8rem)]"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/blue-oil-paint-textured-background_53876-102039.jpg?t=st=1728422574~exp=1728426174~hmac=8b1e0ea08b3d1ddf6d222dce3c6ceb0831e8e4d63b371bac51682958594dbe80&w=900)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md bg-white/15 backdrop-blur-2xl rounded-lg p-6">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">E-Commerce Store!</h1>
              <p className="mb-5">
                Elevate Your Shopping Experience – Where Quality Meets
                Affordability!
              </p>

              <Link to="/home">
                <span className="btn btn-primary">Products</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
