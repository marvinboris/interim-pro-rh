import CompanySettings from "./company";
import NamePhoto from "./name-photo";
import SecuritySettings from "./security";
import SocialMedia from "./social-media";

export function PageAdminSettings() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-3 space-y-4">
        <CompanySettings />
        <SecuritySettings />
      </div>

      <div className="space-y-4">
        <NamePhoto />
        <SocialMedia />
      </div>
    </div>
  );
}
