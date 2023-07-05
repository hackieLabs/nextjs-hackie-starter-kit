import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Happy Coding
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          A Nextjs template built by <strong>hackie</strong>
        </p>
      </div>
      <div className="flex gap-4 flex-wrap">
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.hackie}
          className={buttonVariants({ variant: "default" })}
        >
          Nextjs
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.hackie}
          className={buttonVariants({ variant: "outline" })}
        >
          Tailwindcss
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.hackie}
          className={buttonVariants({ variant: "outline" })}
        >
          Shadcn
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.hackie}
          className={buttonVariants({ variant: "outline" })}
        >
          RadixUI
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.hackie}
          className={buttonVariants({ variant: "outline" })}
        >
          Prisma
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.hackie}
          className={buttonVariants({ variant: "outline" })}
        >
          Next-Auth
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.hackie}
          className={buttonVariants({ variant: "outline" })}
        >
          Clerk
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.hackie}
          className={buttonVariants({ variant: "outline" })}
        >
          Zod
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.hackie}
          className={buttonVariants({ variant: "outline" })}
        >
          React-Query
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.hackie}
          className={buttonVariants({ variant: "outline" })}
        >
          React-Hook-Form
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.hackie}
          className={buttonVariants({ variant: "outline" })}
        >
          Zustand
        </Link>
      </div>
    </section>
  )
}
