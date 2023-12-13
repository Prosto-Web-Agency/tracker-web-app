export const getOrCreateTooltip = (chart: any) => {
  let tooltipEl = chart.canvas.parentNode.querySelector("div.tooltipEl");

  if (!tooltipEl) {
    tooltipEl = document.createElement("div");
    tooltipEl.style.background = "rgba(29, 27, 35, 0.5)";
    tooltipEl.style.backdropFilter = "blur(12px)";
    tooltipEl.style.borderRadius = "10px";
    tooltipEl.style.color = "white";
    tooltipEl.style.opacity = 1;
    tooltipEl.style.pointerEvents = "none";
    tooltipEl.style.position = "absolute";
    tooltipEl.style.transform = "translate(-50%, 0)";
    tooltipEl.style.transition = "all .3s ease";
    tooltipEl.style.border = "1px solid rgba(255, 255, 255, 0.1)";
    tooltipEl.style.minWidth = "180px";
    tooltipEl.classList.add('tooltipEl');
    tooltipEl.style.zIndex = "40";

    const table = document.createElement("table");
    table.style.margin = "0px";

    tooltipEl.appendChild(table);
    chart.canvas.parentNode.appendChild(tooltipEl);
  }

  return tooltipEl;
};

const pointElement = (color: string) => {
  const point = document.createElement("div");
  point.style.width = "18px";
  point.style.height = "18px";
  point.style.borderRadius = "9px";
  point.style.transition = "1s";
  point.style.border = "2px solid white";
  point.style.background = color;
  point.style.position = "absolute";
  point.style.top = 62 + "px";
  point.style.left = 80 + "px";

  return point;
};

export const externalTooltipHandler = (context: any, color: string) => {
  // Tooltip Element
  const { chart, tooltip } = context;
  const tooltipEl = getOrCreateTooltip(chart);

  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = 0;
    return;
  }

  // Set Text
  if (tooltip.body) {
    const titleLines = tooltip.title || [];
    const bodyLines = tooltip.body.map((b: any) => b.lines);

    const tableHead = document.createElement("thead");

    titleLines.forEach((title: any) => {
      const tr = document.createElement("tr");
      tr.style.borderWidth = String(0);

      const th = document.createElement("th");
      th.style.borderWidth = String(0);
      th.style.fontWeight = "300";
      th.style.fontSize = "12px";
      const text = document.createTextNode(title);

      th.appendChild(text);
      tr.appendChild(th);
      tableHead.appendChild(tr);
    });

    const tableBody = document.createElement("tbody");
    bodyLines.forEach((body: any) => {
      const tr = document.createElement("tr");
      tr.style.backgroundColor = "inherit";
      tr.style.borderWidth = String(0);

      const td = document.createElement("td");
      td.style.borderWidth = String(0);
      td.style.fontSize = "14px";

      const text = document.createTextNode("Результат: " + body);

      td.appendChild(text);
      tr.appendChild(td);
      tableBody.appendChild(tr);
    });

    const tableRoot = tooltipEl.querySelector("table");
    if (!tableRoot) return;

    // Remove old children
    while (tableRoot.firstChild) {
      tableRoot.firstChild.remove();
    }

    // Add new children
    tableRoot.appendChild(tableHead);
    tableRoot.appendChild(tableBody);

    tableRoot.appendChild(
      pointElement(color)
    );
  }

  const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

  // Display, position, and set styles for font
  tooltipEl.style.opacity = 1;
  tooltipEl.style.left = positionX + tooltip.caretX + "px";
  tooltipEl.style.top = positionY - 70 + tooltip.caretY + "px";
  tooltipEl.style.font = tooltip.options.bodyFont.string;
  tooltipEl.style.padding =
    tooltip.options.padding + "px " + tooltip.options.padding + "px";
};
