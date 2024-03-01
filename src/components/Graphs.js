import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./graphs.css"; // Import your CSS file

const TechnologiesCard = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null); // Ref to hold the chart instance

    useEffect(() => {
        // Data for the pie chart
        const data = {
            labels: ["React Native", "React JS", ".NET", "Node.js", "MongoDB", "SQL", "Unity", "Python", "Java"],
            datasets: [{
                label: "Technologies",
                data: [15, 20, 10, 15, 10, 10, 5, 10, 5],
                backgroundColor: [
                    "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9900", "#FF0000", "#66FF66", "#FFFF66"
                ]
            }]
        };

        const ctx = chartRef.current.getContext("2d");

        // Destroy existing chart instance if it exists
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        // Create the pie chart
        chartInstance.current = new Chart(ctx, {
            type: "pie",
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });

        // Cleanup function to destroy chart instance
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div className="card">
            <canvas ref={chartRef} className="pie-chart" />
        </div>
    );
}

export default TechnologiesCard;
