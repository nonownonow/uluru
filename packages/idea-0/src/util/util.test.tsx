import { describe, expect, test } from "vitest";
import { html, identity } from "./util";
import React from "react";

describe("htmlChildren", () => {
  test("문자열 html 을 dangerouslySetInnerHTML prop 로 만든다", () => {
    expect(html("test")).toStrictEqual({
      dangerouslySetInnerHTML: {
        __html: "test",
      },
    });
  });
  test("jsx 를 받아서 children prop 로 만든다", () => {
    expect(html(<div>테스트</div>)).toStrictEqual({
      children: <div>테스트</div>,
    });
  });
});
describe("identity", () => {
  test("값을 그대로 반환한다", () => {
    expect(identity(1)).toBe(1);
  });
});
