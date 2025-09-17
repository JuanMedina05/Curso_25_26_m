# Manual. Configurar github por ssh

## Comprobar instalaciones de git, nmp y node

```bash
git --version
node --version
npm --version
```

## Creación del repositorio local

### Lo creamos en la carpeta Curso_25_26_m

```bash
git init
```

## Creación de las claves con ssh-keygen

```bash
ssh-keygen -t ed25519 -C "juanperezmedina2005@gmail.com"
```

## Añadimos las claves a GitHub

![imagen](/img/clavessh.png)

## Añadir la clave a ssh-agent

```bash
ssh-add ~/.ssh/id_ed25519
```

## Comprobar la conexion SSH

```bash
ssh -T git@github.com
```

## Conectarse al repositorio copiando la url SSH a nuestro repositorio local

![imagen](/img/ClaveSSHGithub.png)

### Comando git

```bash
git remote add origin git@github.com:JuanMedina05/Curso_25_26_m.git
```