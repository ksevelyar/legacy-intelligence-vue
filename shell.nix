with import <nixpkgs> {};
stdenv.mkDerivation {
  name = "node-env";
  buildInputs = [
    google-chrome
  ];
  GOOGLE_CHROME_BIN = "${google-chrome}/bin/google-chrome-stable";
}
