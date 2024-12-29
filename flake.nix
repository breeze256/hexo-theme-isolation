{
  description = "The flake for hexo-theme-plata development.";

  inputs = {
    nixpkgs.url = "nixpkgs/nixos-24.11";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
        pname = "hexo-theme-plata";
        version = "0.1.1";
      in
      {
        packages.nodejs = pkgs.nodejs;

        packages.default = self.packages.pnpm;

        devShell =
          pkgs.mkShell {
            buildInputs =
              [
                pkgs.nodejs
                pkgs.nodePackages.pnpm
              ];
          };
      });
}
