<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class SuccessNotification extends Notification
{
    use Queueable;
    protected $contact;

    /**
     * Create a new notification instance.
     */
    public function __construct($contact)
    {
        $this->contact = $contact;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('Pesan Terkirim - www.putraabaditenda.com')
            ->greeting('Halo '.$this->contact->name.',')
            ->line('Kami ingin memberitahu Anda bahwa pesan Anda melalui formulir kontak telah berhasil terkirim. Terima kasih atas partisipasi Anda!')
            ->line('Kami akan segera meninjau pesan Anda dan meresponsnya sesegera mungkin.')
            ->line('Jangan ragu untuk menghubungi kami lagi jika Anda membutuhkan bantuan lebih lanjut atau memiliki pertanyaan tambahan.')
            ->line('Terima kasih');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
