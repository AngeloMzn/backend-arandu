import { Resend } from "resend";
const resend = new Resend('re_Wnni3Qrs_CEzZxE8q4FX1CgkXo6cECYn1');

export class EmailProvider {
  async sendEmail(data: { to: string; name: string; subject: string; body: string }): Promise<void> {

    try {
      const response = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: [data.to],
        subject: data.subject,
        html: data.body
      });
      console.log(response);
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      throw new Error("Falha no envio de e-mail");
    }
  }
}
