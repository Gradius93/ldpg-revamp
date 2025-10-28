/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://ldpg.co.uk",
  generateRobotsTxt: false, // We already have a custom robots.txt
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/api/*"],
  additionalPaths: async (config) => {
    // Add dynamic routes for projects and portfolio
    const result = [];

    // Add current projects
    try {
      const { getAllProjects } = await import("./src/data/currentProjects");
      const projects = getAllProjects();
      projects.forEach((project) => {
        result.push({
          loc: `/projects/${project.slug}`,
          changefreq: "monthly",
          priority: 0.8,
          lastmod: new Date().toISOString(),
        });
      });
    } catch (error) {
      console.warn(
        "Could not load current projects for sitemap:",
        error.message
      );
    }

    // Add portfolio projects
    try {
      const { getAllPortfolioProjects } = await import(
        "./src/data/portfolioProjects"
      );
      const portfolioProjects = getAllPortfolioProjects();
      portfolioProjects.forEach((project) => {
        result.push({
          loc: `/portfolio/${project.slug}`,
          changefreq: "monthly",
          priority: 0.8,
          lastmod: new Date().toISOString(),
        });
      });
    } catch (error) {
      console.warn(
        "Could not load portfolio projects for sitemap:",
        error.message
      );
    }

    return result;
  },
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    if (path === "/") {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    if (path === "/about" || path === "/contact") {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }

    if (path === "/projects" || path === "/portfolio") {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
