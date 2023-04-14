import type { Renderer, ProjectAnnotations } from "@storybook/types";
import { withQueryDecorator } from "./withQuery";

const preview: ProjectAnnotations<Renderer> = {
  decorators: [withQueryDecorator],
};

export default preview;
