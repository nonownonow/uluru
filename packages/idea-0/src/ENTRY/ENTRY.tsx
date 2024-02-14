import { ElementType } from "react";
import { Formatter, Primitive } from "~/type/type";
import { html, identity } from "..";

export type EntryData = [string, Primitive];
export type ENTRYProps<T extends EntryData> = $ENTRY<T> & $ENTRYCallback;
export interface $ENTRY<E extends EntryData> {
  /**
   * 엔트리 형태 = [key, value]
   * */
  $entry: E;
  /**
   * 키의 포멧을 적용하는 함수
   * */
  $keyFormat?: Formatter<E[0]>;
  /**
   * 값의 포멧을 적용하는 함수
   * */
  $valueFormat?: Formatter<E[1]>;
}
export interface $ENTRYCallback {
  Root?: ElementType;
  Key?: ElementType;
  Value?: ElementType;
}
/**
 * 의 구조를 구현한 고차 컴포넌트
 **/
export const ENTRY = function ENTRY<E extends EntryData>(props: ENTRYProps<E>) {
  const {
    Root = "div",
    Key = "div",
    Value = "div",
    $entry,
    $keyFormat = identity,
    $valueFormat = identity,
  } = props;
  return (
    <Root data-idea-entry="">
      <Key data-idea-key="" {...html($keyFormat($entry[0]))} />
      <Value data-idea-value="" {...html($valueFormat($entry[1]))} />
    </Root>
  );
};
