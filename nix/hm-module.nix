# Home-manager module for Brody speech-to-text
#
# Provides a systemd user service for autostart.
# Usage: imports = [ brody.homeManagerModules.default ];
#        services.brody.enable = true;
{
  config,
  lib,
  pkgs,
  ...
}:
let
  cfg = config.services.brody;
in
{
  options.services.brody = {
    enable = lib.mkEnableOption "Brody speech-to-text user service";

    package = lib.mkOption {
      type = lib.types.package;
      defaultText = lib.literalExpression "brody.packages.\${system}.brody";
      description = "The Brody package to use.";
    };
  };

  config = lib.mkIf cfg.enable {
    systemd.user.services.brody = {
      Unit = {
        Description = "Brody speech-to-text";
        After = [ "graphical-session.target" ];
        PartOf = [ "graphical-session.target" ];
      };
      Service = {
        ExecStart = "${cfg.package}/bin/brody";
        Restart = "on-failure";
        RestartSec = 5;
      };
      Install.WantedBy = [ "graphical-session.target" ];
    };
  };
}
