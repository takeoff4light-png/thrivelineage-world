import type {NextConfig} from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Explicit path = predictable resolution (fixes "Could not locate request configuration module")
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  // keep your existing config options here
};

export default withNextIntl(nextConfig);
