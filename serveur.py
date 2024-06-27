import subprocess
import os

def start_php_server(port=8000):
    current_dir = os.path.dirname(os.path.abspath(__file__))

    print(f"Répertoire courant du script: {current_dir}")

    # Vérifie si le fichier index.php existe dans le répertoire cgi-bin
    index_file = os.path.join(current_dir, 'index.php')
    print(f"Chemin complet vers index.php: {index_file}")

    if not os.path.isfile(index_file):
        print(f"Le fichier {index_file} n'existe pas.")
        return

    # Construit la commande pour démarrer le serveur PHP intégré
    command = ['php', '-S', f'localhost:{port}']
    command_str = ' '.join(command)  # Pour affichage facile
    
    print(f"Commande exécutée: {command_str}")

    try:
        # Démarre le serveur PHP
        process = subprocess.Popen(command)
        print(f"Serveur PHP démarré sur http://localhost:{port}")
        print("Appuyez sur Ctrl+C pour arrêter le serveur.")
        
        # Attend que le processus se termine (lorsque vous appuyez sur Ctrl+C)
        process.wait()
    except KeyboardInterrupt:
        # Gère l'appui sur Ctrl+C pour arrêter le serveur
        print("Arrêt du serveur PHP...")
        process.terminate()

if __name__ == "__main__":
    # Exécution de l'exemple
    start_php_server(port=8000)
