import { render } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import { ENTRY } from "./ENTRY";

describe("ENTRY", () => {
  test("default", () => {
    const { asFragment } = render(<ENTRY $entry={["key", "value"]} />);

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-idea-entry=""
        >
          <div
            data-idea-key=""
          >
            key
          </div>
          <div
            data-idea-value=""
          >
            value
          </div>
        </div>
      </DocumentFragment>
    `);
  });
});
