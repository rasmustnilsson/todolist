<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use App\Entity\Todo;

class TodoController extends Controller
{

    private function serializeTodo(Todo $todo)
    {
        return array(
            'name' => $todo->getName(),
            'priority' => $todo->getPriority(),
            'description' => $todo->getDescription(),
            'dueDate' => $todo->getDueDate(),
            'regDate' => $todo->getRegDate(),
            'done' => $todo->getDone(),
        );
    }


    /**
     * @Route("/createtodo", name="createTodo")
     * @Method("POST")
     */
    public function createAction(Request $request)
    {

        $put_str = $request->getContent();
        parse_str($put_str, $_PUT);
        //return new Response($_PUT['dueDate']);

        $entityManager = $this->getDoctrine()->getManager();

        $todo = new Todo();
        $todo->setName($_PUT['name']);
        $todo->setPriority($_PUT['priority']);
        $todo->setDescription($_PUT['description']);
        $todo->setDueDate(\DateTime::createFromFormat('Y-m-d', $_PUT['dueDate']));
        $todo->setRegDate(\DateTime::createFromFormat('Y-m-d', "2018-09-09"));
        $todo->setDone(false);

        $entityManager->persist($todo);
        $entityManager->flush();

        
        return $this->redirectToRoute('home');
    }

    /**
     * @Route("/gettodos", name="getTodos")
     */
    public function getTodos(Request $request)
    {
        $todos = $this->getDoctrine()
            ->getRepository(Todo::class)
            ->findAll();

        $data = array('todos' => array());
        foreach ($todos as $todo) {
            $data['todos'][] = $this->serializeTodo($todo);
        }
        $response = new Response(json_encode($data), 200);
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }


    /**
     * @Route("/", name="home")
     * @Route("/{slug}", name="home2")
     */
    public function indexAction(Request $request, $slug = null)
    {
        return $this->render('default/index.html.twig');

    }
}

?>