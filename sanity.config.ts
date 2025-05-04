import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { codeInput } from "@sanity/code-input";
import { table } from "@sanity/table";
import { projectId, dataset } from "./lib/env.api";

export default defineConfig({
  name: "portfolio",
  title: "rinchindugar.com",
  basePath: "/studio",
  projectId,
  dataset,
  apiVersion: "2025-04-01",
  plugins: [deskTool(), visionTool(), codeInput(), table()],
  schema: { types: schemaTypes },
});
