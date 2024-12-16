import React, { useRef, useEffect } from "react";
import * as d3 from "d3";


const NetworkGraph = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Example dataset
    const data = {
      nodes: [
        { id: "I'm here!", group: 0 },
        { id: "Data Analytics", group: 1 },
        { id: "BI", group: 1 },
        { id: "ML", group: 1 },
        { id: "NLP", group: 1 },
        { id: "Software Development", group: 5 },
        { id: "Domain Knowledge", group: 6 },
        { id: "Product", group: 6 },
        { id: "Marketing", group: 6 },
        { id: "Operations", group: 6 },
      ],
      links: [
        { source: "I'm here!", target: "Data Analytics" },
        { source: "I'm here!", target: "ML" },
        { source: "I'm here!", target: "BI" },
        { source: "I'm here!", target: "Software Development" },
        { source: "I'm here!", target: "Domain Knowledge" },
        { source: "Data Analytics", target: "BI" },
        { source: "Data Analytics", target: "ML" },
        { source: "Data Analytics", target: "Domain Knowledge" },
        { source: "Data Analytics", target: "Software Development" },
        { source: "Domain Knowledge", target: "Product" },
        { source: "Domain Knowledge", target: "Marketing" },
        { source: "Domain Knowledge", target: "Operations" },
        { source: "ML", target: "NLP" },
        { source: "ML", target: "Software Development" },
        { source: "BI", target: "Software Development" },
      ]
    };

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    const color = d3.scaleOrdinal(d3.schemeDark2);

    const simulation = d3.forceSimulation(data.nodes)
      .force("link", d3.forceLink(data.links).id(d => d.id).distance(100))
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .on("tick", ticked);

    function ticked() {
      context.clearRect(0, 0, width, height);

      // Draw links
      context.beginPath();
      context.strokeStyle = "#01a252";
      context.lineWidth = 1.5;
      data.links.forEach(drawLink);
      context.stroke();

      // Draw nodes
      data.nodes.forEach(drawNode);
    }

    function drawLink(link) {
      context.moveTo(link.source.x, link.source.y);
      context.lineTo(link.target.x, link.target.y);
    }

    function drawNode(node) {
      context.beginPath();
      context.arc(node.x, node.y, 14, 0, 2 * Math.PI);
      console.log(node.group);
      const color_from_scheme = color(node.group);
      context.fillStyle = node.group == 0 ? '#01a252' : color_from_scheme;
      context.fill();

      // Add labels
      context.font = "18px Arial";
      context.fillStyle = "#dddddd";
      context.fillText(node.id, node.x + 14, node.y - 4);
    }

    // Cleanup on unmount
    return () => {
      simulation.stop();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={600}
    ></canvas>
  );
};

export default NetworkGraph;
