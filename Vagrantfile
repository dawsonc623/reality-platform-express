# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  ssh_port = 2200

  config.vm.box = "ubuntu/xenial64"

  config.vm.network "private_network",  ip: "192.168.144.101"
  config.vm.network "forwarded_port",   guest: 3000, host: 3000
  config.vm.network "forwarded_port", id: "ssh", guest: 22, host: ssh_port, auto_correct: true

  config.ssh.port = ssh_port

  config.vm.provider "virtualbox" do |vb|
    vb.customize [ "modifyvm", :id, "--uartmode1", "disconnected" ]
  end

  config.vm.provision "ansible" do |ansible|
    ansible.inventory_path  = "./ansible/hosts"
    ansible.limit           = "all"
    ansible.playbook        = "./ansible/site.yml"

    # Debugging
    ansible.verbose         = "vvvv"
  end
end
