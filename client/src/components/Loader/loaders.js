import ContentLoader from "react-content-loader";


export const ProfileHeadLoader = (props) => (
  <ContentLoader
    width={700}
    height={300}
    viewBox="0 0 700 300"
    backgroundColor="#f5f5f5"
    foregroundColor="#dbdbdb"
    {...props}
  >
    <rect x="4" y="8" rx="3" ry="3" width="7" height="288" />
    <rect x="6" y="289" rx="3" ry="3" width="669" height="8" />
    <rect x="670" y="9" rx="3" ry="3" width="6" height="285" />
    <rect x="55" y="42" rx="16" ry="16" width="274" height="216" />
    <rect x="412" y="113" rx="3" ry="3" width="102" height="7" />
    <rect x="402" y="91" rx="3" ry="3" width="178" height="6" />
    <rect x="405" y="139" rx="3" ry="3" width="178" height="6" />
    <rect x="416" y="162" rx="3" ry="3" width="102" height="7" />
    <rect x="405" y="189" rx="3" ry="3" width="178" height="6" />
    <rect x="5" y="8" rx="3" ry="3" width="669" height="7" />
    <rect x="406" y="223" rx="14" ry="14" width="72" height="32" />
    <rect x="505" y="224" rx="14" ry="14" width="72" height="32" />
    <rect x="376" y="41" rx="3" ry="3" width="231" height="29" />
  </ContentLoader>
);

ProfileHeadLoader.metadata = {
  name: "Sridhar Easwaran",
  github: "sridhareaswaran",
  description: "Events",
  filename: "EventsLoader",
};


export const DetailList = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={160}
      viewBox="0 0 400 160"
      backgroundColor="#d9d9d9"
      foregroundColor="#ededed"
      {...props}
    >
      <rect x="50" y="6" rx="4" ry="4" width="343" height="38" />
      <rect x="8" y="6" rx="4" ry="4" width="35" height="38" />
      <rect x="50" y="55" rx="4" ry="4" width="343" height="38" />
      <rect x="8" y="55" rx="4" ry="4" width="35" height="38" />
      <rect x="50" y="104" rx="4" ry="4" width="343" height="38" />
      <rect x="8" y="104" rx="4" ry="4" width="35" height="38" />
    </ContentLoader>
  );
};

DetailList.metadata = {
  name: "Abraham Calsin",
  github: "abrahamcalsin",
  description: "Loading a list of tasks.",
  filename: "TaskList",
};



export const CatalogMagic = ({
  width = 1366,
  heading = { width: 140, height: 24 },
  row = 2,
  column = 5,
  padding = 12,
  borderRadius = 4,
  ...props
}) => {
  const list = [];

  let height;

  for (let i = 1; i <= row; i++) {
    for (let j = 0; j < column; j++) {
      const itemWidth = (width - padding * (column + 1)) / column;

      const x = padding + j * (itemWidth + padding);

      const height1 = itemWidth;

      const height2 = 20;

      const height3 = 20;

      const space =
        padding + height1 + (padding / 2 + height2) + height3 + padding * 4;

      const y1 = padding + heading.height + padding * 2 + space * (i - 1);

      const y2 = y1 + padding + height1;

      const y3 = y2 + padding / 2 + height2;

      list.push(
        <>
          <rect
            x={x}
            y={y1}
            rx={borderRadius}
            ry={borderRadius}
            width={itemWidth}
            height={height1}
          />
          <rect x={x} y={y2} rx={0} ry={0} width={itemWidth} height={height2} />
          <rect
            x={x}
            y={y3}
            rx={0}
            ry={0}
            width={itemWidth * 0.6}
            height={height3}
          />
        </>
      );

      if (i === row) {
        height = y3 + height3;
      }
    }
  }

  return (
    <ContentLoader
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      {...props}
    >
      {heading && (
        <rect
          x={padding}
          y={padding}
          rx={0}
          ry={0}
          width={heading.width}
          height={heading.height}
        />
      )}
      {list}
    </ContentLoader>
  );
};

CatalogMagic.metadata = {
  name: "I am Doong - I come from Việt Nam",
  github: "toiladoong",
  description: "CatalogMagic",
  filename: "CatalogMagic",
};


export const ThreeDots = (props) => (
  <ContentLoader
    viewBox="0 0 400 160"
    height={160}
    width={400}
    backgroundColor="transparent"
    {...props}
  >
    <circle cx="150" cy="86" r="8" />
    <circle cx="194" cy="86" r="8" />
    <circle cx="238" cy="86" r="8" />
  </ContentLoader>
);

ThreeDots.metadata = {
  name: "RioF",
  github: "clariokids",
  description: "Three Dots",
  filename: "ThreeDots",
};


export const DataTable = (props) => (
  <ContentLoader
    width={1500}
    height={400}
    viewBox="0 0 1500 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="27" y="139" rx="4" ry="4" width="20" height="20" />
    <rect x="67" y="140" rx="10" ry="10" width="85" height="19" />
    <rect x="188" y="141" rx="10" ry="10" width="169" height="19" />
    <rect x="402" y="140" rx="10" ry="10" width="85" height="19" />
    <rect x="523" y="141" rx="10" ry="10" width="169" height="19" />
    <rect x="731" y="139" rx="10" ry="10" width="85" height="19" />
    <rect x="852" y="138" rx="10" ry="10" width="85" height="19" />
    <rect x="1424" y="137" rx="10" ry="10" width="68" height="19" />
    <rect x="26" y="196" rx="4" ry="4" width="20" height="20" />
    <rect x="66" y="197" rx="10" ry="10" width="85" height="19" />
    <rect x="187" y="198" rx="10" ry="10" width="169" height="19" />
    <rect x="401" y="197" rx="10" ry="10" width="85" height="19" />
    <rect x="522" y="198" rx="10" ry="10" width="169" height="19" />
    <rect x="730" y="196" rx="10" ry="10" width="85" height="19" />
    <rect x="851" y="195" rx="10" ry="10" width="85" height="19" />
    <circle cx="1456" cy="203" r="12" />
    <rect x="26" y="258" rx="4" ry="4" width="20" height="20" />
    <rect x="66" y="259" rx="10" ry="10" width="85" height="19" />
    <rect x="187" y="260" rx="10" ry="10" width="169" height="19" />
    <rect x="401" y="259" rx="10" ry="10" width="85" height="19" />
    <rect x="522" y="260" rx="10" ry="10" width="169" height="19" />
    <rect x="730" y="258" rx="10" ry="10" width="85" height="19" />
    <rect x="851" y="257" rx="10" ry="10" width="85" height="19" />
    <circle cx="1456" cy="265" r="12" />
    <rect x="26" y="316" rx="4" ry="4" width="20" height="20" />
    <rect x="66" y="317" rx="10" ry="10" width="85" height="19" />
    <rect x="187" y="318" rx="10" ry="10" width="169" height="19" />
    <rect x="401" y="317" rx="10" ry="10" width="85" height="19" />
    <rect x="522" y="318" rx="10" ry="10" width="169" height="19" />
    <rect x="730" y="316" rx="10" ry="10" width="85" height="19" />
    <rect x="851" y="315" rx="10" ry="10" width="85" height="19" />
    <circle cx="1456" cy="323" r="12" />
    <rect x="26" y="379" rx="4" ry="4" width="20" height="20" />
    <rect x="66" y="380" rx="10" ry="10" width="85" height="19" />
    <rect x="187" y="381" rx="10" ry="10" width="169" height="19" />
    <rect x="401" y="380" rx="10" ry="10" width="85" height="19" />
    <rect x="522" y="381" rx="10" ry="10" width="169" height="19" />
    <rect x="730" y="379" rx="10" ry="10" width="85" height="19" />
    <rect x="851" y="378" rx="10" ry="10" width="85" height="19" />
    <circle cx="1456" cy="386" r="12" />
    <rect x="978" y="138" rx="10" ry="10" width="169" height="19" />
    <rect x="977" y="195" rx="10" ry="10" width="169" height="19" />
    <rect x="977" y="257" rx="10" ry="10" width="169" height="19" />
    <rect x="977" y="315" rx="10" ry="10" width="169" height="19" />
    <rect x="977" y="378" rx="10" ry="10" width="169" height="19" />
    <rect x="1183" y="139" rx="10" ry="10" width="85" height="19" />
    <rect x="1182" y="196" rx="10" ry="10" width="85" height="19" />
    <rect x="1182" y="258" rx="10" ry="10" width="85" height="19" />
    <rect x="1182" y="316" rx="10" ry="10" width="85" height="19" />
    <rect x="1182" y="379" rx="10" ry="10" width="85" height="19" />
    <rect x="1305" y="137" rx="10" ry="10" width="85" height="19" />
    <rect x="1304" y="194" rx="10" ry="10" width="85" height="19" />
    <rect x="1304" y="256" rx="10" ry="10" width="85" height="19" />
    <rect x="1304" y="314" rx="10" ry="10" width="85" height="19" />
    <rect x="1304" y="377" rx="10" ry="10" width="85" height="19" />
    <circle cx="37" cy="97" r="11" />
    <rect x="26" y="23" rx="5" ry="5" width="153" height="30" />
    <circle cx="1316" cy="88" r="11" />
    <rect x="1337" y="94" rx="0" ry="0" width="134" height="3" />
    <circle cx="77" cy="96" r="11" />
  </ContentLoader>
);

DataTable.metadata = {
  name: "Mohd Arif Un",
  github: "arif-un",
  description: "Data Table skeleton",
  filename: "DataTable",
};