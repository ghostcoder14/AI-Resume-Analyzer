import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   allowedDevOrigins: [
    // This explicitly allows the IP address seen in your console warning.
    'http://192.168.56.1:3000',
    
    // You can add other specific local IPs/hostnames here if needed.
    // Example: 'http://my-dev-vm:3000',
  ],

};

export default nextConfig;
