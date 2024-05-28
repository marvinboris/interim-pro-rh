import { Polygon1, Polygon2 } from "../ui/polygons";
import Polygon from "./polygon";
import { Button, Input, Section, SectionTitle } from "@/components";
import { Link } from "react-router-dom";

export function PageAuthLogin() {
  return (
    <div className="bg-stone-100 py-32 relative">
      <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-3/5">
        <Polygon1 />
      </div>

      <Section className="flex items-center gap-12">
        <SectionTitle className="flex-1">
          Welcome back!
          <br />
          <span>Log in</span>, to access <br />
          user account.
        </SectionTitle>

        <div className="w-[415px] flex-none relative">
          <div className="absolute bottom-0 right-0 translate-x-14">
            <Polygon2 />
          </div>

          <div className="relative z-0 bg-white shadow-xl rounded-[38px] px-11 pt-14 pb-9">
            <div className="size-9 bg-primary rounded-full absolute top-5 right-5" />

            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Polygon />
            </div>

            <div className="font-bold text-2xl">Sign in</div>
            <form className="mt-6">
              <Input
                name="email"
                type="email"
                label="E-mail address"
                placeholder="johndoe@email.com"
              />
              <Input
                name="password"
                type="password"
                label="Password"
                className="mt-2.5"
                placeholder="*****************"
              />

              <div className="text-right mt-6 text-xs font-medium *:underline *:text-primary *:font-semibold">
                Forgot password ? <Link to="/reset">Reset here</Link>
              </div>

              <div className="mt-8">
                <Button size="xl" className="w-full">
                  Log in
                </Button>
              </div>

              <div className="mt-5 text-center text-sm font-medium *:underline *:text-primary *:font-semibold">
                Don’t have an account ? <Link to="/register">Create one</Link>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}
