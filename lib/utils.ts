import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateEdges = (nodes: any): Edges[] => {
  const edges: Edges[] = [];

  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].type === "sendButton") {
      const node = nodes[i];

      node.data.buttons.forEach((button: any) => {
        edges.push({
          id: `edge-${generateRandomId()}`,
          source: node.id,
          target: button.id,
          type: "smoothstep",
          sourceHandle: button.id + "-a",
        });
      });

      continue;
    }

    const sourceId = nodes[i].target;

    for (let j = i + 1; j <= nodes.length - 1; j++) {
      const targetId = nodes[j]?.id;

      if (sourceId === targetId) {
        edges.push({
          id: `edge-${generateRandomId()}`,
          source: nodes[i].id,
          target: targetId,
          type: "smoothstep",
        });

        break;
      }
    }
  }

  return edges;
};

export const generateNodes = (nodes: any) => {
  const newNodes = [];

  if (nodes.length === 1) {
    const randomId = `node-${generateRandomId()}`;

    nodes[0]["target"] = randomId;
    newNodes.push(nodes[0]);

    newNodes.push({
      id: randomId,
      type: "addNode",
      targetPosition: "left",
      position: { x: 0, y: 100 },
    });

    return newNodes;
  }

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];

    if (node.type === "sendButton" || node.type === "sendRadio") {
      const randomId = `node-${generateRandomId()}`;

      nodes[i]["target"] = randomId;

      newNodes.push(nodes[i]);

      let x = nodes[i].position.x + 600;
      let y = nodes[i].position.y - 70;

      node.data.buttons.forEach((button: any) => {
        newNodes.push({
          pid: randomId,
          cardType: "button",
          id: button.id,
          type: "addNode",
          targetPosition: "left",
          position: { x, y },
        });

        y += 150;
      });

      continue;
    } else if (!("target" in nodes[i])) {
      const randomId = `node-${generateRandomId()}`;

      newNodes.push({ ...nodes[i], target: randomId });

      newNodes.push({
        id: randomId,
        type: "addNode",
        data: { value: 123 },
        targetPosition: "left",
        position: { x: 250, y: 138 },
      });

      continue;
    }

    newNodes.push(nodes[i]);
  }

  return newNodes;
};

export function generateRandomId() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  let result = "";

  for (let i = 0; i < 9; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}