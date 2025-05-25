let
  # A commit in 24.11
  nixpkgs = fetchTarball "https://github.com/NixOS/nixpkgs/archive/3e362ce63e16b9572d8c2297c04f7c19ab6725a5.tar.gz";
  pkgs = import nixpkgs { config = {}; overlays = []; };
in

pkgs.mkShell {
  packages = with pkgs; [
    jekyll
  ];
}
