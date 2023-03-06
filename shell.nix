{ pkgs ? import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/934e613c31cf7af0624dcf088b9e2d9b802d0717.tar.gz") {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs-16_x
  ];

  shellHook = ''
    echo "[NIX] Hi Troub, nixing today?"
  '';
}
