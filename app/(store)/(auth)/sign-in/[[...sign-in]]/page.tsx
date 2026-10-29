import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center py-20">
      <SignIn
        appearance={{
          variables: {
            colorPrimary: "#f97316",
            borderRadius: "0.75rem",
          },
          elements: {
            formButtonPrimary: {
              backgroundColor: "#f97316",
              "&:hover": {
                backgroundColor: "#ea580c",
              },
            },
            footerActionLink: {
              color: "#f97316",
            },
            identityPreviewEditButton: {
              color: "#f97316",
            },
            formFieldInput: {
              borderRadius: "0.5rem",
            },
          },
        }}
      />
    </div>
  );
}
