import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const NetworkGraph = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Example dataset
    const data = {
      nodes: [
        { id: "Python", group: 1 },
        { id: "Machine Learning", group: 1 },
        { id: "Deep Learning", group: 1 },
        { id: "SQL", group: 3 },
        { id: "Data Analysis", group: 3 },
      ],
      links: [
        { source: "Python", target: "Machine Learning" },
        { source: "Python", target: "Deep Learning" },
        { source: "Machine Learning", target: "Deep Learning" },
        { source: "SQL", target: "Data Analysis" },
        { source: "Data Analysis", target: "Machine Learning" }
      ]
    };

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const simulation = d3.forceSimulation(data.nodes)
      .force("link", d3.forceLink(data.links).id(d => d.id).distance(100))
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .on("tick", ticked);

    function ticked() {
      context.clearRect(0, 0, width, height);

      // Draw links
      context.beginPath();
      data.links.forEach(drawLink);
      context.strokeStyle = "#999";
      context.lineWidth = 1.5;
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
      context.arc(node.x, node.y, 20, 0, 2 * Math.PI);
      context.fillStyle = color(node.group);
      context.fill();

      // Add labels
      context.font = "12px Arial";
      context.fillStyle = "#fff";
      context.fillText(node.id, node.x, node.y);
    }

    // Cleanup on unmount
    return () => {
      simulation.stop();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
    ></canvas>
  );
};

export default NetworkGraph;
