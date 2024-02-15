import { ElementType, forwardRef } from "react";
import {
  Formatter,
  PolymorphicComponentProps,
  PolymorphicRef,
} from "~/types/type";
import { VALUE } from "~/VALUE/VALUE";
import { identity } from "~/util/util";
import { EntryData } from "~/types/type";

export interface $ENTRY<D extends EntryData> {
  $entry: D;
  $keyFormat?: Formatter<D[0]>;
  $valueFormat?: Formatter<D[1]>;
}
interface $ENTRYCallback<
  Entry extends ElementType = "div",
  Key extends ElementType = "div",
  Value extends ElementType = "div"
> {
  Entry?: Entry;
  Key?: Key;
  Value?: Value;
}
type ENTRYProps<
  D extends EntryData,
  E extends ElementType,
  K extends ElementType,
  V extends ElementType
> = PolymorphicComponentProps<E, $ENTRY<D> & $ENTRYCallback<E, K, V>>;

/**
 * ENTRY 구조를 구현한 고차 컴포넌트
 **/
export const ENTRY = forwardRef(function ENTRY<
  D extends EntryData,
  E extends ElementType = "div",
  K extends ElementType = "div",
  V extends ElementType = "div"
>(props: ENTRYProps<D, E, K, V>, ref: PolymorphicRef<E>) {
  const {
    $entry: [key, value],
    Entry = "div",
    Key = "div" as ElementType,
    Value = "div" as ElementType,
    $keyFormat = identity,
    $valueFormat = identity,
  } = props;
  return (
    <Entry data-idea-entry={key} ref={ref}>
      <VALUE
        data-idea-key={key}
        Value={Key}
        $value={key}
        $valueFormat={$keyFormat}
      />
      <VALUE
        data-idea-value={key}
        Value={Value}
        $value={value}
        $valueFormat={$valueFormat}
      />
    </Entry>
  );
});
