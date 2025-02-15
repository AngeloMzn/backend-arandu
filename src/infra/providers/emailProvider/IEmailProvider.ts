export interface IEmailService {
  sendEmail(data: { to: string; name: string; subject: string; body: string }): Promise<void>;
}