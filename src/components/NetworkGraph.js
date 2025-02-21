import { useRef, useEffect } from "react";
import * as d3 from "d3";


const NetworkGraph = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const data = {
      nodes: [
        { id: "I'm here!", group: 0 },
        { id: "Data Science", group: 1 },
        { id: "Data Analysis", group: 1 },
        { id: "Statistical Inference", group: 1  },
        { id: "Machine Learning", group: 1 },
        { id: "NLP", group: 1 }, 
        { id: "Python | SQL | Tableau", group: 1 },
        { id: "Domain Knowledge", group: 3 },
        { id: "Marketing", group: 3 },
        { id: "Operations", group: 3 },
        { id: "Product", group: 3 }
      ],
      links: [
        { source: "I'm here!", target: "Data Science" },
        { source: "I'm here!", target: "Domain Knowledge" },
        { source: "Data Science", target: "Data Analysis" },
        { source: "Data Science", target: "Statistical Inference" },
        { source: "Data Science", target: "Machine Learning" },
        { source: "Data Science", target: "Python | SQL | Tableau" },
        { source: "Machine Learning", target: "NLP" },
        { source: "Domain Knowledge", target: "Product" },
        { source: "Domain Knowledge", target: "Marketing" },
        { source: "Domain Knowledge", target: "Operations" }
      ]
    };

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    const color = d3.scaleOrdinal(d3.schemeDark2);

    const simulation = d3.forceSimulation(data.nodes)
      .force("link", d3.forceLink(data.links).id(d => d.id).distance(d => d.distance || 100))
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
      const color_from_scheme = color(node.group);
      context.fillStyle = node.group === 0 ? '#01a252' : color_from_scheme;
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
