# DevOps CI/CD Pipeline with Monitoring & Automation

## 📜 Description

A full-stack CI/CD pipeline project built with Jenkins, Docker, Ansible, and AWS, integrated with Prometheus and Grafana for real-time monitoring and alerting. It automates infrastructure provisioning, application deployment, performance monitoring, and health checks using modern DevOps tools.

## 🛠️ Tech Stack

- **CI/CD**: Jenkins (without Jenkinsfile)
- **Containerization**: Docker, Docker Compose
- **Automation**: Ansible
- **Cloud Infrastructure**: AWS EC2
- **Monitoring**: Prometheus, Node Exporter, Grafana (manually installed)
- **Version Control**: Git + GitHub
- **Web Stack**: React (Frontend) + Flask (Backend)

## ⚙️ Features

- ✅ Automated Linux server configuration with Ansible
- ✅ Full CI/CD pipeline setup in Jenkins for every GitHub push
- ✅ Dockerized frontend and backend services
- ✅ Deployed multi-container application on AWS EC2
- ✅ Real-time system metrics collection via Node Exporter
- ✅ Grafana dashboards with Prometheus data source
- ✅ Custom alert rules with email notifications

## 🗂️ Project Structure

```
.
├── ansible/
│   └── playbooks, inventory
├── backend/
│   └── Flask API
├── frontend/
│   └── React App
├── docker-compose.yml
├── prometheus/
│   └── prometheus.yml, alerts.yml
├── grafana/
│   └── dashboards, provisioning
└── README.md
```

## 🚀 CI/CD Pipeline

1. Developer pushes code to GitHub
2. Jenkins triggers build automatically (no Jenkinsfile used, configured via UI)
3. Ansible provisions remote server (if needed)
4. Jenkins builds Docker images & pushes to DockerHub
5. Docker Compose runs the app on AWS EC2
6. Prometheus scrapes metrics from Node Exporter
7. Grafana visualizes performance
8. Alerts are triggered based on thresholds

## 📊 Monitoring & Alerting

- Prometheus scrapes metrics from application & system targets.
- Grafana displays Node Exporter dashboards.
- Alerts set up for:
  - High CPU/Memory/Disk usage
  - Target down
- Email notifications sent via SMTP (manually configured)

## 🛡️ Security & Networking

- Security groups configured for:
  - Jenkins: 8080
  - Prometheus: 9090
  - Grafana: 3000
  - Node Exporter: 9100
- SSH access restricted to specific IPs
- Application endpoints protected and containerized

## 🧲 How to Run

1. Clone the repo
2. Set up AWS EC2 instances
3. Configure Ansible inventory
4. Run Ansible playbook
5. Access Jenkins on `http://<JENKINS-IP>:8080`
6. Trigger build (or wait for GitHub push)
7. Monitor app with Prometheus and Grafana on the monitoring server

## 📸 Screenshots

> Include:

- Jenkins Pipeline success
- Grafana dashboard (Node Exporter)
- Prometheus targets page

## ✍️ Author

**Avdhoot Kolekar**\
DevOps Enthusiast | Cloud Learner | Automation Lover

---

## 🌱 Future Scope

### 🌐 HTTPS + SSL with Nginx & Certbot

- Use **Nginx** as a reverse proxy container
- Integrate **Let's Encrypt (Certbot)** to provision free SSL certificates
- Serve frontend securely over **HTTPS**

### ☸️ Kubernetes Migration

- Convert Docker Compose setup into **Kubernetes manifests**
- Deploy using **Minikube (locally)** or **Amazon EKS (cloud)**
- Use **Helm charts** for simplified deployments

### 📦 Docker Image Versioning & Rollbacks

- Implement version tagging like `v1`, `v2`, etc.
- Add rollback mechanism in Jenkins pipeline in case of failure

### 📈 Monitoring & Logging

- Integrate **Prometheus + Grafana** for live monitoring
- Use **ELK Stack** or **CloudWatch** for logs and observability

---

## 📝 Summary

> Built an end-to-end CI/CD pipeline using Jenkins, Docker, and Ansible to deploy a full-stack ML app on AWS EC2.  
Enabled seamless updates via GitHub push. Future enhancements include Nginx-based SSL termination and full Kubernetes orchestration.

<!-- This future scope section nicely rounds off the project. Consider linking to resources or related repos if you want to guide readers further. -->

