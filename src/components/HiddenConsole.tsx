import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const triviaQuestions = [
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style System",
      "Creative Style Syntax",
      "Coded Style Structures"
    ],
    correct: 0
  },
  {
    question: "Which is NOT a JavaScript data type?",
    options: [
      "String",
      "Boolean",
      "Integer",
      "Symbol"
    ],
    correct: 2
  },
  {
    question: "What is the Python mascot?",
    options: [
      "Snake",
      "Dragon",
      "Cobra",
      "Python"
    ],
    correct: 0
  }
];

export const HiddenConsole = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 'd') {
        setIsOpen(prev => !prev);
        if (!isOpen) {
          toast({
            title: "🎮 Hidden Console Activated!",
            description: "Try the coding trivia game!",
          });
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, toast]);

  const handleAnswer = (optionIndex: number) => {
    if (optionIndex === triviaQuestions[currentQuestion].correct) {
      setScore(prev => prev + 1);
      toast({
        title: "🎉 Correct!",
        description: "You got it right!",
      });
    } else {
      toast({
        title: "❌ Wrong Answer",
        description: "Try again next time!",
        variant: "destructive",
      });
    }

    if (currentQuestion < triviaQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      toast({
        title: "🏆 Game Complete!",
        description: `Final Score: ${score + (optionIndex === triviaQuestions[currentQuestion].correct ? 1 : 0)}/${triviaQuestions.length}`,
      });
      setGameStarted(false);
      setCurrentQuestion(0);
      setScore(0);
    }
  };

  if (!isOpen) return null;

  return (
    <Card className="fixed bottom-4 right-4 w-96 p-4 bg-black/90 text-green-500 font-mono z-50 border-green-500">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">Developer Console</h3>
          <Button
            variant="ghost"
            className="text-green-500 hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            × Close
          </Button>
        </div>
        
        <div className="space-y-2">
          {!gameStarted ? (
            <div className="space-y-4">
              <p>Welcome to the hidden console! Press Ctrl+Alt+D to toggle.</p>
              <p>Try the coding trivia game:</p>
              <Button
                variant="outline"
                className="w-full text-green-500 border-green-500 hover:bg-green-500/20"
                onClick={() => setGameStarted(true)}
              >
                Start Game
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-sm">Question {currentQuestion + 1}/{triviaQuestions.length}</p>
              <p className="text-lg">{triviaQuestions[currentQuestion].question}</p>
              <div className="grid grid-cols-1 gap-2">
                {triviaQuestions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full text-left text-green-500 border-green-500 hover:bg-green-500/20"
                    onClick={() => handleAnswer(index)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
              <p className="text-sm">Current Score: {score}/{triviaQuestions.length}</p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};