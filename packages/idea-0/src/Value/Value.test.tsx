import { render } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import { VALUE, VALUEProps } from "./VALUE";
import { Default, Polymorphic, WithLabel } from "./VALUE.stories";
describe("VALUE", () => {
  test("default", () => {
    const { asFragment } = render(<VALUE {...(Default.args as VALUEProps)} />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-idea-value=""
        >
          Hello 
          <em>
            world
          </em>
        </div>
      </DocumentFragment>
    `);
  });
  test("polymorphic", () => {
    const { asFragment } = render(
      <VALUE {...(Polymorphic.args as VALUEProps)} />
    );
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-idea-value=""
        >
          Hello 
          <em>
            world
          </em>
        </div>
      </DocumentFragment>
    `);
  });
  test("withValueFormat", () => {
    const { asFragment } = render(
      <VALUE {...(WithLabel.args as VALUEProps)} />
    );
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-idea-value=""
        >
          My Hello 
          <em>
            world
          </em>
        </div>
      </DocumentFragment>
    `);
  });
});
