import { Primitive } from "~/type/type";

export interface $ENTRY {
  /**
   * 엔트리 형태 = [key, value]
   * */
  $data: [string, Primitive];
  /**
   * 키의 포멧을 적용하는 함수
   * */
  $keyLabel?: string;
  /**
   * 값의 포멧을 적용하는 함수
   * */
  $valueLabel?: string;
}

export const ENTRY = function ENTRY() {
  return <div>ENTRY3</div>;
};
