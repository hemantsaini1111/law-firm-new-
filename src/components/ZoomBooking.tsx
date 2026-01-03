import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Video, CheckCircle2, ArrowRight, ArrowLeft, X } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface ZoomBookingProps {
    isOpen: boolean;
    onClose: () => void;
}

type BookingStep = 'date' | 'time' | 'details' | 'success';

const timeSlots = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM'
];

export const ZoomBooking: React.FC<ZoomBookingProps> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState<BookingStep>('date');
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        purpose: '',
    });

    const handleNextStep = () => {
        if (step === 'date' && selectedDate) setStep('time');
        else if (step === 'time' && selectedTime) setStep('details');
    };

    const handleBackStep = () => {
        if (step === 'time') setStep('date');
        else if (step === 'details') setStep('time');
    };

    const handleBookingSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate booking process
        setTimeout(() => {
            setIsLoading(false);
            setStep('success');
        }, 1500);
    };

    const resetBooking = () => {
        setStep('date');
        setSelectedDate(new Date());
        setSelectedTime(null);
        setFormData({ name: '', email: '', phone: '', purpose: '' });
    };

    const handleClose = () => {
        onClose();
        setTimeout(resetBooking, 300);
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden bg-white border-2 border-[#5C3317]/20 shadow-2xl rounded-2xl">
                <div className="relative">
                    {/* Header Theme Gradient */}
                    <div className="h-2 bg-gradient-to-r from-[#5C3317] via-[#8B5A2B] to-[#5C3317]" />


                    <div className="p-6 sm:p-8">
                        <DialogHeader className="mb-8">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-[#5C3317]/10 rounded-lg">
                                    <Video className="w-6 h-6 text-[#5C3317]" />
                                </div>
                                <DialogTitle className="text-2xl font-serif font-bold text-gray-900">
                                    Online Appointment
                                </DialogTitle>
                            </div>
                            <DialogDescription className="text-gray-600 text-base">
                                Schedule a virtual consultation via Zoom
                            </DialogDescription>
                        </DialogHeader>

                        {/* Progress Bar */}
                        {step !== 'success' && (
                            <div className="flex items-center gap-2 mb-8">
                                {['date', 'time', 'details'].map((s, i) => (
                                    <React.Fragment key={s}>
                                        <div
                                            className={cn(
                                                "w-full h-1.5 rounded-full transition-all duration-500",
                                                step === s ? "bg-[#5C3317] shadow-[0_0_8px_rgba(92,51,23,0.3)]" :
                                                    (i < ['date', 'time', 'details'].indexOf(step) ? "bg-[#5C3317]/60" : "bg-gray-100")
                                            )}
                                        />
                                    </React.Fragment>
                                ))}
                            </div>
                        )}

                        {/* Step Content */}
                        <div className="min-h-[300px] animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {step === 'date' && (
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                                        <CalendarIcon className="w-5 h-5" /> 1. Select a Date
                                    </h3>
                                    <div className="flex justify-center border rounded-xl p-4 bg-stone-50/50">
                                        <Calendar
                                            mode="single"
                                            selected={selectedDate}
                                            onSelect={setSelectedDate}
                                            disabled={(date) => date < new Date() || date.getDay() === 0}
                                            className="rounded-md border-none"
                                        />
                                    </div>
                                    <div className="flex justify-end">
                                        <Button
                                            onClick={handleNextStep}
                                            disabled={!selectedDate}
                                            className="bg-[#5C3317] hover:bg-[#4A2812] text-white px-8 h-12 rounded-xl group"
                                        >
                                            Choose Time <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {step === 'time' && (
                                <div className="space-y-4">
                                    <button
                                        onClick={handleBackStep}
                                        className="flex items-center text-sm text-gray-500 hover:text-[#5C3317] transition-colors mb-2"
                                    >
                                        <ArrowLeft className="w-4 h-4 mr-1" /> Back to date selection
                                    </button>
                                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                                        <Clock className="w-5 h-5" /> 2. Available Time Slots
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-4">
                                        For {selectedDate ? format(selectedDate, 'PPP') : ''}
                                    </p>
                                    <div className="grid grid-cols-3 gap-2">
                                        {timeSlots.map((time) => (
                                            <button
                                                key={time}
                                                onClick={() => setSelectedTime(time)}
                                                className={cn(
                                                    "py-3 px-2 rounded-xl text-sm font-medium transition-all duration-200 border",
                                                    selectedTime === time
                                                        ? "bg-[#5C3317] text-white border-[#5C3317] shadow-lg scale-[1.02]"
                                                        : "bg-white text-gray-700 border-gray-200 hover:border-[#5C3317] hover:bg-stone-50"
                                                )}
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="flex justify-end mt-8">
                                        <Button
                                            onClick={handleNextStep}
                                            disabled={!selectedTime}
                                            className="bg-[#5C3317] hover:bg-[#4A2812] text-white px-8 h-12 rounded-xl group"
                                        >
                                            Enter Details <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {step === 'details' && (
                                <form onSubmit={handleBookingSubmit} className="space-y-4">
                                    <button
                                        type="button"
                                        onClick={handleBackStep}
                                        className="flex items-center text-sm text-gray-500 hover:text-[#5C3317] transition-colors mb-2"
                                    >
                                        <ArrowLeft className="w-4 h-4 mr-1" /> Back to time selection
                                    </button>
                                    <h3 className="text-lg font-semibold text-gray-800">3. Your Information</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="book-name">Full Name</Label>
                                            <Input
                                                id="book-name"
                                                placeholder="John Doe"
                                                className="rounded-xl"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="book-email">Email</Label>
                                            <Input
                                                id="book-email"
                                                type="email"
                                                placeholder="john@example.com"
                                                className="rounded-xl"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="book-phone">Phone Number</Label>
                                        <Input
                                            id="book-phone"
                                            placeholder="+91 00000 00000"
                                            className="rounded-xl"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="book-purpose">Consultation Purpose</Label>
                                        <Textarea
                                            id="book-purpose"
                                            placeholder="Briefly describe your legal inquiry"
                                            className="rounded-xl min-h-[100px]"
                                            required
                                            value={formData.purpose}
                                            onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                                        />
                                    </div>
                                    <div className="pt-4">
                                        <Button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full bg-[#5C3317] hover:bg-[#4A2812] text-white h-12 rounded-xl text-lg font-bold shadow-xl flex items-center justify-center gap-2"
                                        >
                                            {isLoading ? (
                                                <div className="flex items-center gap-2">
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    Scheduling...
                                                </div>
                                            ) : (
                                                <>Confirm Zoom Appointment <CheckCircle2 className="w-5 h-5" /></>
                                            )}
                                        </Button>
                                    </div>
                                </form>
                            )}

                            {step === 'success' && (
                                <div className="flex flex-col items-center justify-center py-12 text-center animate-in zoom-in-95 duration-500">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600 shadow-inner">
                                        <CheckCircle2 className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2">Appointment Scheduled!</h3>
                                    <p className="text-gray-600 max-w-[300px] mb-8">
                                        Your Zoom consultation is booked for <strong>{selectedTime}</strong> on <strong>{selectedDate ? format(selectedDate, 'PPP') : ''}</strong>.
                                    </p>
                                    <p className="text-sm text-gray-500 mb-8 bg-stone-50 p-4 rounded-xl border border-stone-100">
                                        A confirmation email with the Zoom link has been sent to <strong>{formData.email}</strong>.
                                    </p>
                                    <Button
                                        onClick={handleClose}
                                        className="bg-[#5C3317] hover:bg-[#4A2812] text-white px-10 h-12 rounded-xl font-bold"
                                    >
                                        Done
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
