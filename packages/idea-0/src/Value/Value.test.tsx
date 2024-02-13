import { expect, it } from "vitest";
import { VALUE } from "./Value";
import React from "react";
import { render } from "@testing-library/react";
import { Default } from "./Value.stories";

it("Value", () => {
  const { asFragment } = render(<VALUE {...Default.args} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <h1
        data-idea-value="Hello <em>world</em>"
      >
        My Hello &lt;em&gt;world&lt;/em&gt;
      </h1>
    </DocumentFragment>
  `);
});
