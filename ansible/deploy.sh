# to setup the jenkins serrver

#!/bin/bash

# 🧼 System Prep
echo "🔄 Updating system..."
sudo apt update && sudo apt upgrade -y

# ☕ Install Java
echo "☕ Installing Java 17..."
sudo apt install openjdk-17-jdk -y

# 🔑 Add Jenkins GPG key
echo "🔑 Adding Jenkins key..."
curl -fsSL https://pkg.jenkins.io/debian/jenkins.io-2023.key | sudo tee \
  /usr/share/keyrings/jenkins-keyring.asc > /dev/null

# 📦 Add Jenkins repo
echo "📦 Adding Jenkins repository..."
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
  https://pkg.jenkins.io/debian binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null

# 🚀 Install Jenkins
echo "🚀 Installing Jenkins..."
sudo apt update
sudo apt install jenkins -y

# ▶️ Start Jenkins
echo "▶️ Enabling & Starting Jenkins..."
#sudo systemctl enable jenkins
sudo systemctl start jenkins

# ✅ Final Status
echo "✅ Jenkins Status:"
sudo systemctl status jenkins

# 🔐 Show Admin Password
echo "🔐 Initial Jenkins Admin Password:"
sudo cat /var/lib/jenkins/secrets/initialAdminPassword

echo "Ansible installation"
sudo apt update && sudo apt install ansible -y


# to run the ansible playbook

echo "running ansible playbook"
cd project/

ansible-playbook -i hosts.ini setup.yml
