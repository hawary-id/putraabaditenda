<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ContactNotification extends Notification
{
    use Queueable;
    public $name;
    public $email;
    public $subject;
    public $message;

    /**
     * Create a new notification instance.
     */
    public function __construct($name,$email,$subject,$message)
    {
        $this->name = $name;
        $this->email = $email;
        $this->subject = $subject;
        $this->message = $message;
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
            ->subject('Pesan dari formulir kontak - putraabaditenda.com')
            ->greeting('Halo Admin,')
            ->line('Kami ingin memberitahu Anda bahwa baru saja ada pesan masuk melalui formulir kontak pada situs web kita. Berikut adalah rinciannya:')
            ->line('Nama        : ' .$this->name)
            ->line('Email       : ' .$this->email)
            ->line('Subjek    : '.$this->subject)
            ->line('Pesan    : '.$this->message)
            ->line('Mohon segera periksa dan tanggapi pesan tersebut. Terima kasih atas perhatiannya!');
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
