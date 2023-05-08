import TodoListApp from "@/components/TodoListApp";

export default function Home() {
  return (
    <div className="w-full h-screen bg-purple-950 pt-8">
      <div className="bg-white p-3 max-w-md mx-auto rounded-lg">
        <TodoListApp />
      </div>
    </div>
  )
}
