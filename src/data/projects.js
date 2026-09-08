import ikea from "../assets/ikea.webp";
import smartcity from "../assets/smartcity.webp";
import road from "../assets/road.webp";

const projects = [
  {
    slug: "distributed-kubernetes-cluster-for-nyc-fhvhv-trip-duration-prediction",
    title: "Big Data Project — Distributed Kubernetes Cluster for NYC FHVHV Trip Duration Prediction",
    category: "Big Data + Machine Learning",
    image:
      "https://raw.githubusercontent.com/Saadawy-AI/fhvhv-distributed-data-cluster/main/Project%20Architecture.jpg",
    problem:
      "A distributed Big Data platform was needed to handle the full lifecycle of NYC FHVHV trip data across multiple physical machines instead of a single local environment.",
    solution:
      "Built a 4-device Kubernetes (K3s) cluster connected through a private Tailscale mesh network, then deployed Spark, MinIO, Airflow, Kafka, PostgreSQL, JupyterLab, and Streamlit as one integrated platform.",
    impact:
      "Created a working end-to-end data platform that distributed processing across 3 Spark worker nodes and enabled ML-driven trip duration prediction with analytics dashboards.",
    architecture:
      "NYC TLC Data -> MinIO Bronze -> Spark transformation -> MinIO Silver -> ML / analytics -> MinIO Gold -> Streamlit dashboard, orchestrated by Airflow.",
    flow: [
      "NYC TLC Data",
      "MinIO Bronze",
      "Spark Transform",
      "MinIO Silver",
      "ML / Analytics",
      "MinIO Gold",
      "Streamlit",
    ],
    dataset:
      "NYC TLC FHVHV trip dataset processed in distributed stages with MinIO as the data lake and Spark as the compute engine.",
    challenges: [
      "Connecting four separate physical machines into one private Kubernetes cluster.",
      "Distributing Spark workloads across 3 worker nodes with 32 CPU cores and ~20 GiB RAM in total.",
      "Coordinating ingestion, orchestration, storage, and analytics across multiple services.",
    ],
    learned:
      "How to design and operate a real distributed Big Data platform where infrastructure, orchestration, and machine learning all work together as a single system.",
    highlights: [
      "4-device K3s cluster with private Tailscale networking.",
      "3 Spark worker nodes with 32 cores and ~20 GiB RAM.",
      "MinIO Bronze / Silver / Gold layered data lake.",
      "Airflow orchestration, Kafka streaming, and Streamlit analytics.",
    ],
    stack: [
      "Kubernetes",
      "K3s",
      "Spark",
      "MinIO",
      "Airflow",
      "Kafka",
      "PySpark",
      "PostgreSQL",
      "JupyterLab",
      "Streamlit",
    ],
    github: "https://github.com/Saadawy-AI/fhvhv-distributed-data-cluster",
    demo: "https://fhvhv-distributed-data-cluster.streamlit.app/",
  },
  {
    slug: "ikea-shopping-analytics-platform",
    title: "IKEA Shopping Analytics Platform",
    category: "Data Engineering + ML + Analytics",
    image: ikea,
    problem:
      "An e-commerce admin workflow needed a cleaner way to move transactional sales data into analytics and forecasting.",
    solution:
      "Built a Java Swing and SQL Server OLTP layer, then designed ETL jobs, a star-schema warehouse, XGBoost forecasting, and a Streamlit analytics dashboard.",
    impact:
      "Delivered a complete OLTP to warehouse to forecasting flow with a deployed dashboard for business-style analysis.",
    architecture:
      "Java Swing App -> SQL Server -> Python ETL -> SQLite star schema -> XGBoost forecasting -> Streamlit dashboard.",
    flow: [
      "Java Swing App",
      "SQL Server OLTP",
      "Python ETL",
      "Star Schema",
      "XGBoost",
      "Streamlit",
    ],
    dataset:
      "Operational SQL Server data extended with reproducible synthetic historical sales because the original demo database was too small for time-series training.",
    challenges: [
      "Keeping the operational Java app separate from the analytics layer.",
      "Designing a star schema from transactional order data.",
      "Using time-based features, lag values, and rolling means for forecasting.",
    ],
    learned:
      "How to connect OLTP systems to analytics and ML workflows without changing the original application code.",
    highlights: [
      "10-table SQL Server operational schema.",
      "SHA-256 password hashing and role-based admin/user access.",
      "18 months of reproducible historical sales simulation.",
      "14-day recursive forecasting workflow.",
    ],
    stack: ["Java", "SQL Server", "Python", "SQLite", "ETL", "XGBoost", "Streamlit"],
    github: "https://github.com/Saadawy-AI/Ikea_Shopping",
    demo: "https://saadawy-ai-ikea-shopping-dashboardapp-kpdswe.streamlit.app/",
  },
  {
    slug: "smart-city-real-time-pipeline",
    title: "Smart City Real-Time Pipeline",
    category: "Streaming Data Engineering",
    image: smartcity,
    problem:
      "Smart city sensor events need continuous ingestion, transformation, and storage without waiting for batch windows.",
    solution:
      "Simulated IoT producers, streamed 5 Kafka topics into Spark Structured Streaming, orchestrated services with Docker, and wrote curated Parquet outputs.",
    impact:
      "Created a distributed real-time architecture with checkpointing and scalable storage patterns.",
    architecture:
      "Python IoT simulation -> Kafka topics -> Spark Structured Streaming -> checkpointed Parquet storage.",
    flow: [
      "IoT Simulation",
      "Kafka Topics",
      "Spark Streaming",
      "Watermarking",
      "Checkpoints",
      "Parquet",
    ],
    dataset:
      "Simulated smart city events covering vehicle movement, GPS, traffic cameras, weather readings, and emergency alerts.",
    challenges: [
      "Processing five independent Kafka topics at the same time.",
      "Defining schemas for JSON streams before writing reliable outputs.",
      "Managing Docker services for Kafka, Zookeeper, Spark master, and workers.",
    ],
    learned:
      "How streaming platforms separate ingestion, processing, and storage in real-time data systems.",
    highlights: [
      "5 Kafka topics for city sensor data.",
      "Spark master with 2 active workers.",
      "2-minute watermarking and checkpointed writes.",
      "Use cases for traffic, weather, GPS, and emergency monitoring.",
    ],
    stack: ["Kafka", "Spark", "Docker", "Python", "Parquet", "Streaming"],
    github: "https://github.com/Saadawy-AI/SmartCity",
  },
  {
    slug: "road-collisions-prediction",
    title: "Road Collisions Prediction",
    category: "Machine Learning",
    image: road,
    problem:
      "Road collision severity is hard to estimate from messy, imbalanced real-world accident data.",
    solution:
      "Built a full ML pipeline with cleaning, EDA, feature engineering, CatBoost training, evaluation, and Streamlit deployment.",
    impact:
      "Achieved 92.6% accuracy and packaged the model into a usable prediction application.",
    architecture:
      "CSV dataset -> cleaning and EDA -> feature engineering -> CatBoost model -> evaluation -> Streamlit app.",
    flow: [
      "CSV Dataset",
      "Cleaning",
      "EDA",
      "Features",
      "CatBoost",
      "Streamlit",
    ],
    dataset:
      "Road collision dataset with dates, locations, road conditions, weather, vehicle details, and a 3-class severity target.",
    challenges: [
      "Handling a highly imbalanced target where slight collisions dominate.",
      "Engineering useful temporal and categorical features.",
      "Choosing metrics beyond accuracy, including weighted F1 and class-level performance.",
    ],
    learned:
      "Why CatBoost is useful for categorical-heavy data and how evaluation changes when classes are imbalanced.",
    highlights: [
      "92.6% accuracy with CatBoost.",
      "Weighted F1-score of 0.92.",
      "14,013 test samples in the classification report.",
      "Streamlit app with instant severity prediction.",
    ],
    stack: ["Python", "CatBoost", "Scikit-learn", "Pandas", "EDA", "Streamlit"],
    github: "https://github.com/Saadawy-AI/Road-Collisions-ML",
    demo: "https://road-collision-severity-app.streamlit.app/",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export default projects;
