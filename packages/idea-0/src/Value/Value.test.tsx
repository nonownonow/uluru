import { render } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import { VALUE } from "./VALUE";
import {
  Default,
  Polymorphic,
  WithChildren,
  WithValueFormat,
} from "./VALUE.stories";
import { ComponentProps } from "react";
type Args = ComponentProps<typeof VALUE>;
describe("VALUE", () => {
  test("default", () => {
    const { asFragment } = render(<VALUE {...(Default.args as Args)} />);
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
    const { asFragment } = render(<VALUE {...(Polymorphic.args as Args)} />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <p
          data-idea-value=""
        >
          Hello 
          <em>
            world
          </em>
        </p>
      </DocumentFragment>
    `);
  });
  test("withValueFormat", () => {
    const { asFragment } = render(
      <VALUE {...(WithValueFormat.args as Args)} />
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
  test("withChildren", () => {
    const { asFragment } = render(<VALUE {...(WithChildren.args as Args)} />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-idea-value=""
        >
          HELLO 
          <em>
            WORLD
          </em>
        </div>
      </DocumentFragment>
    `);
  });
});
