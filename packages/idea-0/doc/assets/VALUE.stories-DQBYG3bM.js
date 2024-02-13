import{j as g}from"./jsx-runtime-2xDJh5tt.js";import{r as D}from"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";function A(e){let r;return typeof e=="string"?r={dangerouslySetInnerHTML:{__html:e}}:r={children:e},r}function _(e){return e}const u=D.forwardRef(function(r,v){const{Root:$,$value:l,$valueFormat:y=_}=r;return g($,{"data-idea-value":r.$valueFormat?l:"",...A(y(l)),ref:v})});try{u.displayName="VALUE",u.__docgenInfo={description:"엔트리의 구조를 구현한 고차 컴포넌트",displayName:"VALUE",props:{$value:{defaultValue:null,description:"값",name:"$value",required:!0,type:{name:"Primitive"}},$valueFormat:{defaultValue:null,description:"값에 포멧을 적용하는 함수",name:"$valueFormat",required:!1,type:{name:"Formatter<V>"}},Root:{defaultValue:null,description:"",name:"Root",required:!0,type:{name:"ElementType"}}}}}catch{}const F={component:u,tags:["autodocs"]},a={args:{Root:"h1",$value:"Hello <em>world</em>"}},o={args:{Root:"p",$value:"Hello <em>world</em>"}},t={args:{Root:"h1",$value:"Hello <em>world</em>",$valueFormat:e=>`My ${e}`}};var n,s,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    Root: "h1",
    $value: "Hello <em>world</em>"
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var c,d,i;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    Root: "p",
    $value: "Hello <em>world</em>"
  }
}`,...(i=(d=o.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,C,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    Root: "h1",
    $value: "Hello <em>world</em>",
    $valueFormat: a => \`My \${a}\`
  }
}`,...(f=(C=t.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const V=["Default","Polymorphic","WithLabel"];export{a as Default,o as Polymorphic,t as WithLabel,V as __namedExportsOrder,F as default};
