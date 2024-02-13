import { render } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import { ENTRY } from "./ENTRY";

describe("ENTRY", () => {
  test("default", () => {
    const { asFragment } = render(<ENTRY />);

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div>
          ENTRY
        </div>
      </DocumentFragment>
    `);
  });
});
