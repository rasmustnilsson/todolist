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
            'id' => $todo->getId(),
            'name' => $todo->getName(),
            'priority' => $todo->getPriority(),
            'description' => $todo->getDescription(),
            'dueDate' => $todo->getDueDate(),
            'regDate' => $todo->getRegDate(),
            'done' => $todo->getDone(),
        );
    }

    /**
     * @Route("/edittodo/{id}", name="editTodo")
     * @Method("POST")
     */
    public function editTodo(Request $request, $id = null) {
        $put_str = $request->getContent();
        parse_str($put_str, $_PUT);
        $entityManager = $this->getDoctrine()->getManager();
        $todo = $entityManager->getRepository(Todo::class)->find($id);

        $todo->setName($_PUT['name']);
        $todo->setPriority($_PUT['priority']);
        $todo->setDescription($_PUT['description']);
        $todo->setDueDate(\DateTime::createFromFormat('Y-m-d', $_PUT['dueDate']));
        $todo->setRegDate(\DateTime::createFromFormat('Y-m-d', "2018-09-09"));
        $todo->setDone(false);
        $entityManager->flush();

        return $this->redirectToRoute('home');
    }

    /**
     * @Route("/createtodo", name="createTodo")
     * @Method("POST")
     */
    public function createAction(Request $request)
    {

        $put_str = $request->getContent();
        parse_str($put_str, $_PUT);

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
     * @Route("/gettodo/{id}", name="getTodo")
     */
    public function getTodo(Request $request, $id)
    {
        $todos = $this->getDoctrine()
            ->getRepository(Todo::class)
            ->find($id);
        return $this->json($todos);
    }

    /**
     * @Route("/deletetodo/{id}", name="removeTodo")
     */
    public function deleteTodo(Request $request, $id)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $todo = $this->getDoctrine()
            ->getRepository(Todo::class)
            ->find($id);

        $entityManager->remove($todo);
        $entityManager->flush();

        return $this->redirectToRoute('home');
    }


    /**
     * @Route("/", name="home")
     * @Route("/{slug}", name="home2")
     * @Route("/{slug}/{slug2}", name="home3")
     */
    public function indexAction(Request $request)
    {
        return $this->render('default/index.html.twig');

    }
}

?>