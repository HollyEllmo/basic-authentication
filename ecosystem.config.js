module.exports = {
  apps: [
    {
      name: "tha",
      script: "npm",
      args: "run start",
      env: {
        DATABASE_URL:
          "postgresql://vadim.gallkin:k9LmtHxQDr1h@ep-little-glade-a2vqfpt2-pooler.eu-central-1.aws.neon.tech/next-auth-tutorial?sslmode=require&pgbouncer=true",
        DIRECT_URL:
          "postgresql://vadim.gallkin:k9LmtHxQDr1h@ep-little-glade-a2vqfpt2.eu-central-1.aws.neon.tech/next-auth-tutorial?sslmode=require",
        AUTH_SECRET: "90292dbb34c8e60f749c71d4d7b86762",
        NEXTAUTH_URL: "https://tha-one.ru/api/auth",
        GITHUB_CLIENT_ID: "65e40fa42058f04fcb4d",
        GITHUB_CLIENT_SECRET: "9ee2c5a69b0769f2ef114337cc9fee1bc233b60d",
        GOOGLE_CLIENT_ID:
          "93796997082-9neus4tjvvcc4jjr7ofkhekgeov7vq8j.apps.googleusercontent.com",
        GOOGLE_CLIENT_SECRET: "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",
        RESEND_API_KEY: "re_LtPbZ6BX_H3vcS8HTEWqhvxx49rMgWuKV",
        NEXT_PUBLIC_APP_URL: "https://tha-one.ru",
        UPLOADTHING_SECRET:
          "sk_live_418c330842532241e83fc781721265abfca985ea6c213b80727c030efef4ce9c",
        UPLOADTHING_APP_ID: "47u83jijia",
        OPENAI_API_KEY: "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",
        STRIPE_SECRET_KEY:
          "sk_test_51OhXS6C4lTTB5v8wJsCOSUFc8zTdnr6oAp0dLJZ2XixvWcsh50jPccSCqSBtBHCd8Zu2ckHxa44IEcguktzXRlGj00R0a3YZEW",
        STRIPE_WEBHOOK_SECRET: "whsec_UcCIJzw97CtP90oLnVP6Rbr1OG1DyNod",
        PINECONE_API_KEY: "ddc69d15-a967-4269-926c-85efc2169038",
        SMTP_PASSWORD: "yoky tvyg qvut rgez",
        SMTP_EMAIL: "vadim.gallkin@gmail.com",
      },
    },
  ],
};