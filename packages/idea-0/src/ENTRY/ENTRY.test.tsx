import { render } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import { ENTRY } from "./ENTRY";

describe("ENTRY", () => {
  test("default", () => {
    const { asFragment } = render(<ENTRY $entry={["key", "value"]} />);

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-idea-entry="key"
        >
          <div
            data-idea-key="key"
            data-idea-value=""
          >
            key
          </div>
          <div
            data-idea-value="key"
          >
            value
          </div>
        </div>
      </DocumentFragment>
    `);
  });
});
